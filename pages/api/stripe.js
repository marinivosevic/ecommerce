const stripe = require('stripe')('sk_test_51McswOBRhkjgE97KMLzWThV0VDvochE43e6HOEEmEFyZCGfHXpFkr0So3ar6Xb3AvAucuFo7nJU2Qu9ru7zCz5Xf00ZGWzY5Xm');

export default async function handler(req, res) {

  if (req.method === 'POST') {
    console.log(req.body.cartItems)
    try {
        const params = {
          submit_type:'pay',
          mode:'payment',
          payment_method_types:['card'],
          billing_address_collection:'auto',
          shipping_options:[
            {shipping_rate:'shr_1MdK5wBRhkjgE97KsFS0rI2f'},
            {shipping_rate:'shr_1MdK6WBRhkjgE97KmERGUCx2'},
            
          ],
            line_items: req.body.map((item) =>{
              const img = item.image[0].asset._ref;
              const newImage = img.replace('image-','https://cdn.sanity.io/images/oxlheos6/production/').replace('-webp','.webp');
              console.log('IMAGE',newImage);

              return{
                price_data:{
                  currency:'eur',
                  product_data:{
                    name:item.name,
                    images:[newImage],
                  },
                  unit_amount:item.price*100,
                },
                adjustable_quantity:{
                  enabled:true,
                  minimum:1,
                },
                quantity:item.quantity

              }
            }),
            mode: 'payment',
            success_url: `${req.headers.origin}/?succes=true`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
          }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
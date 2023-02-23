import {loadStripe} from '@stripe/stripe-js';

let stripePromise;

const getStripe = () =>{
    if(!stripePromise){
        stripePromise = loadStripe('pk_test_51McswOBRhkjgE97KvPOOHVWCk5iCCcaQOcKfq1wSLluuIRctiMssSst7YEk3UI4RNUTyuROsxk2uWpuO91iLE1d500IaaFPttK');
    }

    return stripePromise;
}

export default getStripe;
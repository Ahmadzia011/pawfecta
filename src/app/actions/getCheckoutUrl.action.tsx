"use server";

import { logger } from "@/src/lib/logger";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Stripe from "stripe"


export async function getCheckoutUrl(priceId:string) {

    const {isAuthenticated} = await auth()
    if(!isAuthenticated){
      redirect('/sign-in')
    }
  

  try{
    const stripe = new Stripe(
      process.env.STRIPE_SECRET_KEY!
    )


    if(!priceId && !stripe){
      logger(true, 'error', 'The stripe id or priceId is missing')
      return
      }

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId, 
          quantity: 1,
        },
      ],

      mode: 'payment',
      
      success_url: `${process.env.BASE_URL}/success`,
      cancel_url: `${process.env.BASE_URL}/cancel`,
    });

    if (session.url) {
      return session.url
    }
    else{
      throw new Error()
    }
  }
  catch(e:any){
      logger(true, 'error', 'Error:',e)
      return null
  }
  }



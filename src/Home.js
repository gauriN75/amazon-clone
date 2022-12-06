import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
            <div className="home__container">
                  <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                  <div className="home__row">
                  
                        <Product title='The lean startup' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' rating={5} />
                        
                        <Product title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beaten, Dough Hook and Whisk, 5 Litre Glass Bowl' price={239.9} image='https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg' rating={4} />

                  </div>

                  <div className="home__row">

                  <Product title="Noise Pulse 2 Max Advanced Bluetooth Calling Smart Watch with 1.85'' TFT and 550 Nits Brightness, Smart DND, 10 Days Battery, 100 Sports Mode, Smartwatch for Men and Women - (Jet Black)" price={277} image='https://m.media-amazon.com/images/I/71e4q6+FZNL._AC_SX960_SY720_.jpg' rating={4} />

                  <Product title='HP Pavilion x360,12th Gen Intel Core i5-1235U 8GB RAM/512GB SSD 14-inch(35.6 cm) Multitouch-enabled Micro-Edge FHD Laptop /Intel Iris Xe Graphics/Backlit KB/B&O/Win 11/MSO 2021/Space Blue, 14-ek0086TU' price={4400} image='https://m.media-amazon.com/images/I/41wN69B58PL._SX300_SY300_QL70_FMwebp_.jpg' rating={5} />

                  <Product title='GOVO GOKIXX 952 Bluetooth Neckband, 106 Hours Battery, ENC Technology, Fast Charge, Gaming Mode, 10mm Drivers, Type C Charging, Wireless in Ear Earphone (Space Grey)' price={239.9} image='https://m.media-amazon.com/images/I/511wdfVcefL._SX569_.jpg' rating={3} />

                  </div>

                  <div className="home__row">

                  <Product title="ZOUK Handmade Vegan Leather Women's Office Bag for 15.6 inch Laptop with Double Handles" price={23} image='https://m.media-amazon.com/images/I/71FkmgxzlNL._SY450_.jpg' rating={4} />

                  </div>
            </div>

    </div>
  )
}

export default Home

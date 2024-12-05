import PagesTopDiv from '@/components/PagesTopDiv'
import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div>
            <PagesTopDiv heading='Privacy Policy' paragraph='Privacy Policy' />
            <div className='flex flex-col gap-[1em] text-[1.2em]  w-[80%] mx-auto justify-evenly text-navBarLinksColor my-[4em]'>

                <p className='text-[1.1em]'>We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, store, and protect your data when you visit our website or engage with our services.</p>
                <div className='flex flex-col  gap-2'>
                    <p className='font-bold text-[1.5em]'>1. Information We Collect</p>
                    <p>We collect information in the following ways:</p>
                    <ul className='ms-3 list-insidetext-[1.3em] list-disc'>
                        <li>
                            <span className='font-bold'>Personal Information</span> When you interact with us (e.g., request a quote, contact us, or sign up for our newsletter), we may collect personal details such as your name, email address, phone number, and business name.
                        </li>

                        <li>
                            <span className='font-bold'>Non-Personal Information</span> When you interact with us (e.g., request a quote, contact us, or sign up for our newsletter), we may collect personal details such as your name, email address, phone number, and business name.
                        </li>

                    </ul>
                </div>

                <div className='flex flex-col  gap-2'>
                    <p className='font-bold text-[1.5em]'>2. How We Use Your Information</p>
                    <p>We use the information we collect to:</p>
                    <ul className='ms-3 list-disc list-inside'>
                        <li>
                            Provide you with the services and information you request.
                        </li>

                        <li>
                            Improve our website, services, and customer experience.
                        </li>

                        <li>
                            Communicate with you about updates, offers, and news related to G-WISSEN Consults Ltd.
                        </li>

                        <li>
                            Protect the security and integrity of our website.
                        </li>

                    </ul>
                </div>

                <div className='flex flex-col  gap-2'>
                    <p className='font-bold text-[1.5em]'>3. Sharing Your Information</p>
                    <p>We do not sell, rent, or trade your personal information to third parties. However, we may share your information with trusted third-party service providers who assist us in operating our website or providing services to you. These parties are obligated to keep your information confidential and are prohibited from using it for any other purpose.
                    </p>
                </div>

                <div className='flex flex-col  gap-2'>
                    <p className='font-bold text-[1.5em]'>4. Data Security</p>
                    <p>We implement a variety of security measures to protect your personal information, including encryption and secure servers. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.</p>
                </div>

                <div className='flex flex-col  gap-2'>
                    <p className='font-bold text-[1.5em]'>5. Cookies</p>
                    <p>Our website uses cookies to enhance your experience and analyze website traffic. Cookies are small files that are stored on your device when you visit our site. You can control cookie preferences through your browser settings, but disabling cookies may affect your user experience.</p>
                </div>

                <div className='flex flex-col  gap-2'>
                    <p className='font-bold text-[1.5em]'>6. Your Rights</p>
                    <p>You have the right to:</p>
                    <ul className='ms-3 list-disc list-inside'>
                        <li>
                            Access and update the personal information we hold about you.
                        </li>

                        <li>
                            Request the deletion of your personal data, subject to certain conditions.

                        </li>

                        <li>
                            Opt-out of receiving marketing communications by following the unsubscribe instructions in our emails.
                        </li>

                    </ul>
                </div>

                <div className='flex flex-col  gap-2'>
                    <p className='font-bold text-[1.5em]'>7. Changes to This Privacy Policy</p>
                    <p>We may update this Privacy Policy from time to time to reflect changes in our practices or services. We will notify you of any significant changes by posting an updated version on this page.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default PrivacyPolicy
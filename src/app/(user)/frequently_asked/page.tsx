"use client"
import PagesTopDiv from '@/components/PagesTopDiv'
import React, { useState } from 'react'
import Page from '../contact/page';
interface Stringss {
    span?: string;
    desc: string
}

interface FrequentlyAskedType {
    question: string;
    answer: string;
    list_options?: Stringss[]
}

const frequentlyAsked: FrequentlyAskedType[] = [
    {
        question: 'What services does G-WISSEN Consults Ltd offer?',
        answer: 'At G-WISSEN Consults Ltd, we offer a wide range of consulting services to help businesses optimize their operations, embrace digital transformation, and achieve sustainable growth. Our key services include:',
        list_options: [
            { span: "", desc: 'Call Center Optimization' },
            { span: "", desc: 'Project Management' },
            { span: "", desc: 'IT Solutions' },
            { span: "", desc: 'Web Design and Mobile Application Development' },
            { span: "", desc: 'Cybersecurity Services' },
            { span: "", desc: 'Digital Strategy Consulting' },
            { span: "", desc: 'Cloud Solutions' },
            { span: "", desc: 'AI & Automation Integration' },
            { span: "", desc: 'Digital Marketing' },
        ]
    },

    {
        question: 'How do I request a quote for my project?',
        answer: 'Requesting a quote is simple! Just visit our Request a Free Quote page, fill in your project details, and our team will reach out to provide a custom quote tailored to your needs. Alternatively, you can contact us via email or phone for more information.',

    },

    {
        question: 'What industries do you serve?',
        answer: 'We work with businesses across a variety of industries, including:',
        list_options: [
            { span: "", desc: 'Technology' },
            { span: "", desc: 'Healthcare' },
            { span: "", desc: 'Finance and Banking' },
            { span: "", desc: 'Retail' },
            { span: "", desc: 'Educatiom' },
            { span: "", desc: 'Telecommunications Our solutions are customized to meet the unique needs of each industry, helping businesses grow and thrive.' },
        ]
    },


    {
        question: ' How can I get in touch with G-WISSEN Consults Ltd ',
        answer: 'You can contact us through multiple channels:',
        list_options: [
            { span: "Email", desc: "info@gwissenconsults.com" },
            { span: "Phone", desc: "[Insert phone number]" },
            { span: "Address", desc: "[Insert physical address] For more contact options, visit our Contact Us page." },
        ]
    },

    {
        question: 'Can you help with ongoing projects?',
        answer: "Yes! We offer project management services and can assist with both new and ongoing projects. Whether you need support in managing resources, meeting deadlines, or overcoming specific challenges, our team is here to help ensure your project is a success.",


    },


    {
        question: ' Do you offer any digital marketing servicesWhat services does G-WISSEN Consults Ltd offer?',
        answer: 'Yes, we offer a full range of digital marketing services including:',
        list_options: [
            { span: "", desc: "SEO (Search Engine Optimization)" },
            { span: "", desc: "Social Media Marketing" },
            { span: "", desc: "Content Marketing" },
            { span: "", desc: "Email Campaigns" },
            { span: "", desc: "Paid Advertising" },
            { span: "", desc: "Analytics and Reporting Our digital marketing services are designed to boost your online presence, increase brand awareness, and drive business growth." },
        ]
    },

    {
        question: 'What is your approach to cybersecurity?',
        answer: "We take cybersecurity seriously. Our team works to protect your business from digital threats by implementing robust security frameworks, continuous monitoring, and threat detection solutions. We help you safeguard your data, ensure compliance, and maintain business continuity in an ever-evolving digital landscape.",
    },

    {
        question: 'How do you ensure the quality of your services?',
        answer: "We are committed to delivering high-quality solutions by working with experienced professionals and using the latest technologies. Our client-centered approach ensures that we understand your unique needs and tailor our solutions to achieve measurable outcomes. Additionally, we continually monitor and optimize our processes to maintain the highest standards of service.",

    },

    {
        question: 'How do I know if G-WISSEN Consults Ltd is the right fit for my business?',
        answer: 'We understand that choosing the right consulting partner is a big decision. G-WISSEN Consults Ltd offers personalized consultations to assess your needs and discuss how our services can help your business achieve its goals. Our experienced team is committed to delivering tangible results that drive success and long-term growth. Reach out to us for an initial consultation, and we’ll work together to find the best solution for you.',

    },

    {
        question: ' Do you offer support after the project is completed?',
        answer: 'Yes, we provide ongoing support and maintenance services to ensure that your systems and projects continue to perform optimally. Our support services include troubleshooting, software updates, performance monitoring, and more. We’re always available to assist you even after the completion of a project.',

    },

    {
        question: 'What technologies do you use for web and app development?',
        answer: 'For web and mobile application development, we use the latest technologies and platforms to ensure seamless, high-performing solutions. This includes:',
        list_options: [
            { span: "", desc: 'Web Technologies: React, Angular, Laravel, Django' },
            { span: "", desc: 'Mobile App Development: Flutter, React Native, Swift` (iOS), Kotlin (Android)' },
            { span: "", desc: 'Backend Solutions: Python, Java, PHP We tailor our approach based on your specific project needs to deliver the best user experience and functionality ' }
        ]
    },

    {
        question: ' How do I stay updated on G-WISSEN Consults Ltd’s latest services and projects?',
        answer: 'You can stay updated by subscribing to our newsletter or regularly checking our Blog page for the latest updates, news, and project highlights. We also share news on our social media platforms to keep you informed.',

    },

    {
        question: 'Do you offer services for small businesses or startups?',
        answer: 'Yes! We understand the unique challenges faced by small businesses and startups, and we offer scalable solutions that fit your budget and needs. From building your online presence to implementing digital solutions, we provide support to help your business grow and succeed.'
    },
]

const FrequentlyAsked = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleQuestionToggle = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className=' gap-10'>
            <PagesTopDiv heading='Frequently Asked Questions' paragraph='FAQs' />
            <div className='w-[60%] text-[1.2em] flex flex-col mx-auto my-[4em] gap-2 '>

                <p className='text-center font-semibold text-[1.3em] mb-[2em]'>Common Questions</p>

                {frequentlyAsked.map(({ answer, question, list_options }, index) => (
                    <div key={index} className='border-b pb-4'>
                        <button
                            onClick={() => handleQuestionToggle(index)}
                            className={`${openIndex === index ? 'bg-textColor hover:bg-textColor text-white' : 'bg-gray-100 hover:bg-gray-200'
                                } flex justify-between items-center w-full py-3 text-left  font-medium  rounded-md px-4`}
                        >
                            {question}
                            <span>{openIndex === index ? '-' : '+'}</span>
                        </button>

                        <div
                            className={`transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-screen' : 'max-h-0'
                                }`}
                        >
                            <p className='mt-2 px-4'>{answer}</p>
                            {list_options && (
                                <ul className="list-disc pl-8 mt-2 ms-4 space-y-1">
                                    {list_options.map(({ span, desc }, idx) => (
                                        <li key={idx}>
                                            {span && <span className="font-semibold mr-1">{span}:</span>}
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            )}

                        </div>
                    </div>
                ))}
            </div>
        </div>)
}

export default FrequentlyAsked

// HelpPage.tsx
import React from 'react';

const HelpCardPage: React.FC = () => {
    return (
        <div className="max-w-4xl bg-gray-200 h-auto mx-auto p-6  shadow-lg rounded-lg">
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information</h2>
                <p className="text-gray-700 mb-4">
                    Welcome to our help page! Here you can find answers to frequently asked questions and learn more about our services.
                </p>
                <p className="text-gray-700 mb-4">
                    If you have any issues or need assistance, feel free to reach out to us through the contact information provided below. We are here to help you!
                </p>
                <p className="text-gray-700 mb-4">
                    For more details, you can also visit our <a href="#" className="text-blue-500 hover:underline">FAQ section</a>.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Address</h2>
                <address className="text-gray-700 mb-4">
                    <p className="mb-2">DealDrive Technology</p>
                    <p className="mb-2">123 Tech Avenue</p>
                    <p className="mb-2">Port Harcourt, Rivers State</p>
                    <p className="mb-2">Nigeria</p>
                    <p className="mb-2">Email: <a href="mailto:support@dealdrive.com" className="text-blue-500 hover:underline">support@dealdrive.com</a></p>
                    <p className="mb-2">Phone: <a href="tel:+2341234567890" className="text-blue-500 hover:underline">+234 123 456 7890</a></p>
                </address>
            </div>
        </div>
    );
};

export default HelpCardPage;

import React from 'react';
import PropTypes from 'prop-types';

export default function PlaneIconWithText({ data }) {
    const { text } = data;
    return (
        <div className="flex gap-3.5 mt-11">
            <svg width={56} height={18} fill="bg-brand-3">
                <path
                    d="M32.018 13.604c.11-.037.219-.074.292-.112 2.988-1.083 5.467-2.726 8.09-4.444.84-.56 1.677-1.12 2.552-1.643.073-.038.182-.075.255-.112l1.094-.449 10.57-4.556c.327-.187.582-.373.837-.635.11-.112.22-.261.256-.41.072-.15.036-.3-.11-.374C55.6.682 55.271.607 54.98.57 54.178.42 53.34.42 52.5.42c-.947-.037-1.931 0-2.88 0-.4 0-.801-.074-1.202-.111-.51-.075-1.057-.112-1.567-.187-.474-.075-.984-.15-1.458-.112a8.33 8.33 0 00-1.64.261c-.875.262-1.677.673-2.551.971-1.495.56-2.916 1.233-4.41 1.793-1.422.56-2.843 1.195-4.264 1.755-1.458.56-2.88 1.195-4.338 1.756-1.421.56-2.806 1.157-4.227 1.718l-1.969.784c-.072.037-.109 0-.145-.037-.146-.112-.328-.187-.51-.3-.292-.223-.547-.037-.802.038-.438.112-.839.224-1.276.374a48.43 48.43 0 00-1.166.336l-1.203.336c-.292.075-.62.187-.911.261-.547.187-1.13.262-1.677.112-.364-.112-.692-.298-1.02-.448-.219-.112-.401-.187-.62-.299-.583-.298-1.203-.56-1.786-.859-.692-.336-1.348-.634-2.04-.97-.511-.262-1.058-.486-1.64-.56-.22-.038-.438 0-.62.074-.547.224-1.094.485-1.64.71-.438.186-.912.41-1.349.634-.51.224-1.02.486-1.494.71-.51.261-1.057.523-1.568.784-.145.075-.328.15-.473.262-.073.037-.073.074 0 .112.145.112.4.299.62.485.072.075.145.075.218.075.547-.075 1.093-.112 1.64-.187.073 0 .146.038.182.075 1.604 1.457 3.208 2.95 4.848 4.37.182.149 3.353 3.174 4.337 2.838.838-.262 1.676-.56 2.551-.822 1.677-.56 3.39-1.083 5.139-1.419 1.312-.261 2.66-.224 3.973-.336a36.73 36.73 0 008.455-1.793zM27.208 8.6c.036 0 .072-.038.109-.038.036 0 .036-.037.073-.037-.037 0-.037.037-.073.037 0 0-.073.038-.11.038zM8.254 8.338a1.018 1.018 0 00-.328-.448s0-.037-.036-.037c0 0 0 .037.036.037.146.112.255.299.328.448zm-.364-.074c0 .037-.037.037-.037.074 0-.037 0-.037.037-.074zm.364.15c0 .036.037.074.037.111 0-.075 0-.075-.037-.112z"
                    fill="#6AAAE4"
                />
            </svg>
            <p className="font-bold">{text}</p>
        </div>
    );
}

PlaneIconWithText.propTypes = {
    data: PropTypes.object.isRequired,
};
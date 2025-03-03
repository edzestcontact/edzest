import React from "react";

const WhatsAppChat = () => {
    const whatsappNumber = "919673332684"; // Your WhatsApp number in international format
    const message = "Hi! I want to discuss Edzest's Training Program"; // Pre-filled message

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white flex items-center px-4 py-2 rounded-full shadow-lg hover:bg-green-600"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 mr-2"
                >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.099.54 4.147 1.568 5.973L.02 23.888a.797.797 0 00.99.99l5.915-1.548A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.851 0-3.668-.51-5.257-1.473a.799.799 0 00-.603-.088l-3.955 1.034 1.034-3.955a.8.8 0 00-.088-.603C3.65 15.668 3.14 13.851 3.14 12 3.14 6.72 7.72 2.14 12 2.14S20.86 6.72 20.86 12 16.28 21.818 12 21.818zm5.214-6.34c-.283-.143-1.667-.828-1.924-.926-.257-.096-.444-.142-.63.142-.185.283-.725.926-.888 1.115-.162.185-.33.21-.612.068-.283-.143-1.2-.445-2.288-1.415-.845-.751-1.415-1.678-1.582-1.961-.162-.283-.018-.435.124-.578.127-.127.283-.33.425-.492.142-.163.187-.283.283-.47.094-.185.047-.35-.024-.493-.07-.14-.63-1.51-.862-2.07-.227-.545-.457-.473-.63-.482-.162-.008-.35-.01-.536-.01-.183 0-.482.07-.735.35-.257.283-.974.946-.974 2.302 0 1.355.997 2.665 1.136 2.848.14.185 1.958 3.008 4.745 4.117.662.283 1.18.452 1.58.577.662.21 1.265.18 1.742.11.532-.08 1.667-.68 1.905-1.34.236-.66.236-1.228.165-1.34-.07-.112-.256-.185-.537-.33z" />
                </svg>
                Chat 
            </a>
        </div>
    );
};

export default WhatsAppChat;

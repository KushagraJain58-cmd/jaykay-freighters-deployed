/* eslint-disable react/no-unescaped-entities */
export default function InformationPage() {
    return (
        <main className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8 text-center">General Information</h1>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-[#1a237e]">Customs Regulations</h2>
                    <p className="text-gray-700 mb-4">
                        Understanding customs regulations is crucial for smooth international trade. Here are some key points to
                        consider:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Documentation requirements vary by country and type of goods</li>
                        <li>Tariff classification determines applicable duties and taxes</li>
                        <li>Compliance with trade agreements can provide duty benefits</li>
                        <li>Restricted and prohibited items require special permits</li>
                        <li>Valuation methods must comply with WTO standards</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-[#1a237e]">Shipping Guidelines</h2>
                    <p className="text-gray-700 mb-4">
                        Follow these guidelines to ensure your shipments are processed efficiently:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Provide accurate and complete shipping information</li>
                        <li>Use appropriate packaging for the type of goods</li>
                        <li>Include all required documentation with your shipment</li>
                        <li>Adhere to weight and dimension restrictions</li>
                        <li>Consider insurance for valuable shipments</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-[#1a237e]">Industry Resources</h2>
                    <p className="text-gray-700 mb-4">Useful resources for staying informed about logistics and customs:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>World Customs Organization (WCO)</li>
                        <li>International Chamber of Commerce (ICC)</li>
                        <li>International Air Transport Association (IATA)</li>
                        <li>Federation of Indian Export Organisations (FIEO)</li>
                        <li>Central Board of Indirect Taxes and Customs (CBIC)</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4 text-[#1a237e]">FAQs</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-bold text-gray-800">What documents are required for customs clearance?</h3>
                            <p className="text-gray-700">
                                Typically, you'll need a commercial invoice, packing list, bill of lading or airway bill, and
                                certificates of origin. Additional documents may be required depending on the nature of goods and
                                destination country.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800">How long does customs clearance take?</h3>
                            <p className="text-gray-700">
                                Customs clearance time varies by country, type of goods, and completeness of documentation. It can range
                                from a few hours to several days. Working with an experienced customs broker can help expedite the
                                process.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800">What is the difference between CIF and FOB?</h3>
                            <p className="text-gray-700">
                                CIF (Cost, Insurance, and Freight) means the seller covers costs until the goods reach the destination
                                port. FOB (Free on Board) means the seller is responsible only until the goods are loaded onto the
                                vessel, after which the buyer assumes responsibility.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

// JSX Usage Example - No React hooks needed!
// Just include the script and use it like HTML

import './universal-card-grid-snippet.js';

function App() {
    return (
        <div>
            {/* JSX Usage - Same as HTML */}
            <div id="cardGrid" className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-center mb-10">My Missions</h2>
                <div className="flex flex-wrap gap-6 justify-center">
                    {/* Cards will be generated here by UniversalCardGrid */}
                </div>
            </div>

            {/* Optional: Manual initialization */}
            <script dangerouslySetInnerHTML={{
                __html: `
                    // Manual initialization
                    const grid = new UniversalCardGrid('cardGrid');
                    
                    // Example usage:
                    // grid.addCard("Mission 7", "New feature", "bg-orange-500");
                    // grid.removeCard(0);
                    // grid.updateCard(1, { title: "Updated Mission" });
                `
            }} />
        </div>
    );
}

export default App;

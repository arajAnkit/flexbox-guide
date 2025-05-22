import CodeBlock from "@/components/shared/CodeBlock"

export default function FlexboxExamples() {
  return (
    <div className="p-6">
      <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white print:text-black">Common Flexbox Patterns</h3>
      <p className="mb-6 text-gray-700 dark:text-gray-300 print:text-black">
        Ready-to-use code snippets for common layout patterns using Flexbox.
      </p>

      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#800080]/30 via-[#00FFC5]/30 to-[#008080]/30 dark:from-[#800080]/10 dark:via-[#00FFC5]/10 dark:to-[#008080]/10 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">
              Centered Content (Horizontally & Vertically)
            </h4>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <CodeBlock
                  language="html"
                  code={`<div class="centered-container">
  <div class="centered-content">
    Perfectly centered content
  </div>
</div>`}
                />
                <CodeBlock
                  language="css"
                  code={`.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px; /* or any height */
}

.centered-content {
  /* Optional styling for the content */
  padding: 20px;
  background-color: #f0f0f0;
}`}
                />
              </div>
              <div className="flex items-center justify-center h-64 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
                <div className="bg-[#800080]/30 dark:bg-[#800080]/20 p-4 rounded-md">Perfectly centered content</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#800080]/30 via-[#00FFC5]/30 to-[#008080]/30 dark:from-[#800080]/10 dark:via-[#00FFC5]/10 dark:to-[#008080]/10 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">Navigation Bar</h4>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <CodeBlock
                  language="html"
                  code={`<nav class="navbar">
  <div class="logo">Logo</div>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <button class="cta-button">Sign Up</button>
</nav>`}
                />
                <CodeBlock
                  language="css"
                  code={`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

/* Responsive: Stack on small screens */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
  }
}`}
                />
              </div>
              <div className="flex flex-col justify-center h-64">
                <div className="flex justify-between items-center p-4 bg-[#00FFC5]/30 dark:bg-[#00FFC5]/10 rounded-lg">
                  <div className="font-bold">Logo</div>
                  <div className="hidden md:flex gap-4">
                    <a href="#" className="text-blue-600 dark:text-blue-400">
                      Home
                    </a>
                    <a href="#" className="text-gray-600 dark:text-gray-400">
                      About
                    </a>
                    <a href="#" className="text-gray-600 dark:text-gray-400">
                      Services
                    </a>
                    <a href="#" className="text-gray-600 dark:text-gray-400">
                      Contact
                    </a>
                  </div>
                  <button className="bg-[#008080] dark:bg-[#008080]/80 px-3 py-1 rounded text-sm">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#800080]/30 via-[#00FFC5]/30 to-[#008080]/30 dark:from-[#800080]/10 dark:via-[#00FFC5]/10 dark:to-[#008080]/10 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">Card Grid with Equal Height</h4>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <CodeBlock
                  language="html"
                  code={`<div class="card-grid">
  <div class="card">
    <h3>Card 1</h3>
    <p>Short content</p>
    <button>Read More</button>
  </div>
  <div class="card">
    <h3>Card 2</h3>
    <p>This card has more content than the others, making it taller.</p>
    <button>Read More</button>
  </div>
  <div class="card">
    <h3>Card 3</h3>
    <p>Medium length content goes here.</p>
    <button>Read More</button>
  </div>
</div>`}
                />
                <CodeBlock
                  language="css"
                  code={`.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px; /* Grow, shrink, basis */
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
}

.card p {
  flex-grow: 1; /* This makes all cards equal height */
}

.card button {
  align-self: flex-start;
  margin-top: auto;
}`}
                />
              </div>
              <div className="flex flex-col justify-center h-64">
                <div className="flex flex-wrap gap-2">
                  <div className="flex-1 min-w-[120px] flex flex-col p-3 bg-[#800080]/30 dark:bg-[#800080]/10 rounded-lg border border-[#800080]/50 dark:border-[#800080]/20">
                    <h5 className="font-bold text-sm">Card 1</h5>
                    <p className="text-xs flex-grow my-2">Short content</p>
                    <button className="text-xs bg-[#800080] dark:bg-[#800080]/50 px-2 py-1 rounded mt-auto self-start">
                      Read More
                    </button>
                  </div>
                  <div className="flex-1 min-w-[120px] flex flex-col p-3 bg-[#00FFC5]/30 dark:bg-[#00FFC5]/10 rounded-lg border border-[#00FFC5]/50 dark:border-[#00FFC5]/20">
                    <h5 className="font-bold text-sm">Card 2</h5>
                    <p className="text-xs flex-grow my-2">
                      This card has more content than the others, making it taller.
                    </p>
                    <button className="text-xs bg-[#00FFC5] dark:bg-[#00FFC5]/50 px-2 py-1 rounded mt-auto self-start">
                      Read More
                    </button>
                  </div>
                  <div className="flex-1 min-w-[120px] flex flex-col p-3 bg-[#008080]/30 dark:bg-[#008080]/10 rounded-lg border border-[#008080]/50 dark:border-[#008080]/20">
                    <h5 className="font-bold text-sm">Card 3</h5>
                    <p className="text-xs flex-grow my-2">Medium length content goes here.</p>
                    <button className="text-xs bg-[#008080] dark:bg-[#008080]/50 px-2 py-1 rounded mt-auto self-start">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#800080]/30 via-[#00FFC5]/30 to-[#008080]/30 dark:from-[#800080]/10 dark:via-[#00FFC5]/10 dark:to-[#008080]/10 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">Holy Grail Layout</h4>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <CodeBlock
                  language="html"
                  code={`<div class="holy-grail">
  <header>Header</header>
  <div class="holy-grail-body">
    <nav class="holy-grail-nav">Nav</nav>
    <main class="holy-grail-content">Content</main>
    <aside class="holy-grail-aside">Aside</aside>
  </div>
  <footer>Footer</footer>
</div>`}
                />
                <CodeBlock
                  language="css"
                  code={`.holy-grail {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.holy-grail-body {
  display: flex;
  flex: 1;
}

.holy-grail-content {
  flex: 1;
}

.holy-grail-nav, .holy-grail-aside {
  flex: 0 0 200px;
}

/* Responsive: Stack on small screens */
@media (max-width: 768px) {
  .holy-grail-body {
    flex-direction: column;
  }
  
  .holy-grail-nav, .holy-grail-aside {
    flex: 0;
  }
}`}
                />
              </div>
              <div className="flex flex-col justify-center h-64">
                <div className="flex flex-col h-full border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="bg-[#800080]/30 dark:bg-[#800080]/20 p-2 text-center font-bold text-sm">Header</div>
                  <div className="flex flex-1">
                    <div className="bg-[#00FFC5]/30 dark:bg-[#00FFC5]/20 p-2 w-16 text-center text-sm">Nav</div>
                    <div className="bg-[#008080]/30 dark:bg-[#008080]/20 p-2 flex-1 text-center text-sm">Content</div>
                    <div className="bg-[#00FFC5]/30 dark:bg-[#00FFC5]/20 p-2 w-16 text-center text-sm">Aside</div>
                  </div>
                  <div className="bg-[#800080]/30 dark:bg-[#800080]/20 p-2 text-center font-bold text-sm">Footer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

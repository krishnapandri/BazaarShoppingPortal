import { useState } from "react";


export const Category = () => {
  const [IsBlock,SetIsBlock] = useState(false);
  return (
    <>
      <button onClick={()=>SetIsBlock((val)=>!val)} className="btnClass">
        <div className="prefix">
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall icon css-1yvnads"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="CategoryIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm10 10h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"></path>
          </svg>
          <h6
            className="MuiTypography-root MuiTypography-h6 css-1eykb82"
            style={{ margin: "0px" }}
          >
            Categories
          </h6>
        </div>
        <svg style={{'rotate':IsBlock&&'90deg'}}
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall dropdown-icon css-1yvnads"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="CartXIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
        >
          <path
            fill="currentColor"
            d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19"
          ></path>
        </svg>
      </button>
      <div style={{'display': IsBlock ?  'block' : 'none'}} className="categories">
        <div className="css-1si836x">
          <div className="hoverMe1">
            <a href="/fashion">
              <div className="category-dropdown-link">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1yvnads"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ShirtLineIcon"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1"
                    d="M5.777 10.296v7.969c0 1.323 0 1.985.449 2.547c.448.562.985.66 2.058.858c.992.182 2.249.33 3.716.33s2.724-.148 3.716-.33c1.073-.198 1.61-.296 2.059-.858c.448-.562.448-1.224.448-2.547v-7.97c0-.683 0-1.025.132-1.326c.131-.3.378-.523.871-.968l.186-.167c1.056-.952 1.584-1.429 1.588-2.118c.004-.69-.465-1.122-1.401-1.988a8 8 0 0 0-.418-.362c-.472-.378-1.138-.792-1.648-1.09a2.05 2.05 0 0 0-1.567-.205l-.49.129a1.6 1.6 0 0 0-.949.703c-1.202 1.897-3.852 1.897-5.054 0a1.6 1.6 0 0 0-.948-.703l-.49-.129a2.05 2.05 0 0 0-1.568.205c-.51.298-1.176.712-1.648 1.09a8 8 0 0 0-.418.362C3.464 4.594 2.996 5.027 3 5.716s.532 1.166 1.588 2.118l.186.167c.493.445.74.668.871.968c.132.3.132.643.132 1.327Z"
                  ></path>
                </svg>
                <span className="title">Fashion</span>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall caret-icon css-1yvnads"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="CartXIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                >
                  <path
                    fill="currentColor"
                    d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19"
                  ></path>
                </svg>
              </div>
            </a>
            <div className="mega-menu">
            <div className="dropdown-menu">
        <div className="menu-section">
            <h4>Man Clothes</h4>
            <ul>
                <li>Shirt</li>
                <li>T-shirt</li>
                <li>Pant</li>
                <li>Underwear</li>
            </ul>
        </div>
        <div className="menu-section">
            <h4>Accessories</h4>
            <ul>
                <li>Belt</li>
                <li>Hat</li>
                <li>Watches</li>
                <li>Sunglasses</li>
            </ul>
        </div>
        <div className="menu-section">
            <h4>Shoes</h4>
            <ul>
                <li>Sneakers</li>
                <li>Sandals</li>
                <li>Formal</li>
                <li>Casual</li>
            </ul>
        </div>
        <div className="menu-section">
            <h4>Bags</h4>
            <ul>
                <li>Backpack</li>
                <li>Crossbody Bags</li>
                <li>Side Bags</li>
                <li>Slides</li>
            </ul>
        </div>
        <div className="menu-section">
            <h4>Woman Clothes</h4>
            <ul>
                <li>Shirt</li>
                <li>T-shirt</li>
                <li>Pant</li>
                <li>Underwear</li>
            </ul>
        </div>
        <div className="offer-section">
            <h4>40% OFF</h4>
            <p>Limited time offer</p>
            <button>Shop Now</button>
            <img src="https://via.placeholder.com/150" alt="Offer Image"/>
        </div>
    </div>
            </div>
          </div>
          <div className="hoverMe2">
            <a href="/fashion">
              <div className="category-dropdown-link">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1yvnads"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="LaptopMobileIcon"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" stroke="currentColor" strokeWidth="1">
                    <path
                      strokeLinecap="round"
                      d="M22 10c0-3.771 0-5.657-1.172-6.828S17.772 2 14 2S8.343 2 7.172 3.172C6.229 4.115 6.045 5.52 6.009 8M22 14c0 3.771 0 5.657-1.172 6.828S17.772 22 14 22h-2"
                    ></path>
                    <path d="M2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11s2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22s-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5z"></path>
                    <path strokeLinecap="round" d="M17 19h-5"></path>
                  </g>
                </svg>
                <span className="title">Electronics</span>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall caret-icon css-1yvnads"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="CartXIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                >
                  <path
                    fill="currentColor"
                    d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19"
                  ></path>
                </svg>
              </div>
            </a>
            <div className="mega-menu1">
              <div
                className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation5 MuiCard-root css-1niv3j5"
                style={{
                  boxShadow:
                    "rgba(43, 52, 69, 0.05) 0px 0px 24px 0px,rgba(43, 52, 69, 0.05) 0px 3px 6px 0px",
                }}
              >
                <div className="css-1e4e4kv">
                  <div className="column-left">
                    <div className="MuiGrid2-root MuiGrid2-container MuiGrid2-direction-xs-row MuiGrid2-spacing-xs-4 css-ng0cjx">
                      <div className="MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-md-3 css-51e1j6">
                        <div className="title-link">Paras Clothes</div>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Shirt
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          T- shirt
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Pant
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Underwear
                        </a>
                      </div>
                      <div className="MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-md-3 css-51e1j6">
                        <div className="title-link">Accessories</div>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Belt
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Hat
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Watches
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Sunglasses
                        </a>
                      </div>
                      <div className="MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-md-3 css-51e1j6">
                        <div className="title-link">Shoes</div>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Sneakers
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Sandals
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Formal
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Casual
                        </a>
                      </div>
                      <div className="MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-md-3 css-51e1j6">
                        <div className="title-link">Bags</div>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Backpack
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Crossbody Bags
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Side Bags
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Slides
                        </a>
                      </div>
                      <div className="MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-md-3 css-51e1j6">
                        <div className="title-link">Woman Clothes</div>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Shirt
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          T- shirt
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Pant
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Underwear
                        </a>
                      </div>
                      <div className="MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-md-3 css-51e1j6">
                        <div className="title-link">Accessories</div>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Belt
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Hat
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Watches
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Sunglasses
                        </a>
                      </div>
                      <div className="MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-md-3 css-51e1j6">
                        <div className="title-link">Shoes</div>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Sneakers
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Sandals
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Formal
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Casual
                        </a>
                      </div>
                      <div className="MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-md-3 css-51e1j6">
                        <div className="title-link">Bags</div>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Backpack
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Crossbody Bags
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Side Bags
                        </a>
                        <a
                          className="child-link css-1639gl5"
                          href="/products/search?category=clothes"
                        >
                          Slides
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="column-right">
                    <a href="/sales-1"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hoverMe3">
            <a href="/fashion">
              <div className="category-dropdown-link">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1yvnads"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 256 256"
                  data-testid="PersonBikingIcon"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M164 78a26 26 0 1 0-26-26a26 26 0 0 0 26 26m0-40a14 14 0 1 1-14 14a14 14 0 0 1 14-14m36 100a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26M56 138a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26m136-84h-40a6 6 0 0 1-4.24-1.76L120 88.49L96.49 112l35.75 35.76A6 6 0 0 1 134 152v48a6 6 0 0 1-12 0v-45.51l-38.24-38.25a6 6 0 0 1 0-8.48l32-32a6 6 0 0 1 8.48 0L154.49 106H192a6 6 0 0 1 0 12"
                  ></path>
                </svg>
                <span className="title">Bikes</span>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall caret-icon css-1yvnads"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="CartXIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                >
                  <path
                    fill="currentColor"
                    d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
          <div className="hoverMe4">
            <a href="/fashion">
              <div className="category-dropdown-link">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1yvnads"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="TreesIcon"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  >
                    <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0m-3 6v6m6-3v3"></path>
                    <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"></path>
                  </g>
                </svg>
                <span className="title">Home & Garden</span>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall caret-icon css-1yvnads"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="CartXIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                >
                  <path
                    fill="currentColor"
                    d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
          <div className="hoverMe5">
            <a href="/fashion">
              <div className="category-dropdown-link">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1yvnads"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="GiftLineIcon"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M4 11v4c0 3.3 0 4.95 1.025 5.975S7.7 22 11 22h2c3.3 0 4.95 0 5.975-1.025S20 18.3 20 15v-4M3 9c0-.748 0-1.122.201-1.4a1.4 1.4 0 0 1 .549-.44C4.098 7 4.565 7 5.5 7h13c.935 0 1.402 0 1.75.16c.228.106.417.258.549.44C21 7.878 21 8.252 21 9s0 1.121-.201 1.4a1.4 1.4 0 0 1-.549.44c-.348.16-.815.16-1.75.16h-13c-.935 0-1.402 0-1.75-.16a1.4 1.4 0 0 1-.549-.44C3 10.121 3 9.748 3 9m3-5.214C6 2.799 6.8 2 7.786 2h.357A3.857 3.857 0 0 1 12 5.857V7H9.214A3.214 3.214 0 0 1 6 3.786m12 0C18 2.799 17.2 2 16.214 2h-.357A3.857 3.857 0 0 0 12 5.857V7h2.786A3.214 3.214 0 0 0 18 3.786M12 11v11"
                    color="currentColor"
                  ></path>
                </svg>
                <span className="title">Gifts</span>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall caret-icon css-1yvnads"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="CartXIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                >
                  <path
                    fill="currentColor"
                    d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
          <div className="hoverMe6">
            <a href="/fashion">
              <div className="category-dropdown-link">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1yvnads"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="MicrophoneLinesIcon"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M17 7v4a5 5 0 0 1-10 0V7a5 5 0 0 1 10 0m0 0h-3m3 4h-3m6 0a8 8 0 0 1-8 8m0 0a8 8 0 0 1-8-8m8 8v3m0 0h3m-3 0H9"
                    color="currentColor"
                  ></path>
                </svg>
                <span className="title">Music</span>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall caret-icon css-1yvnads"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="CartXIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                >
                  <path
                    fill="currentColor"
                    d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
          <div className="hoverMe7">
            <a href="/fashion">
              <div className="category-dropdown-link">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1yvnads"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="MakeUpIcon"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="m5.654 21l-3.462-9.577l4.77-2.846V3h2v5.577l4.769 2.846L10.269 21zm10.885 0q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143h3.5v-2.77h-3.5q-.213 0-.357-.143q-.143-.144-.143-.357t.143-.356t.357-.143h3.5v-2.77h-3.5q-.213 0-.357-.143q-.143-.144-.143-.357t.143-.356t.357-.143h3.5v-2.77h-3.5q-.213 0-.357-.144q-.143-.143-.143-.356t.143-.356t.357-.144h3.5V5.923h-3.5q-.213 0-.357-.144q-.143-.144-.143-.356q0-.213.143-.357t.357-.143h3.653q.69 0 1.153.463t.463 1.153v12.846q0 .69-.463 1.153T20.192 21zM6.36 20h3.2l2.95-8.15l-3.677-2.196H7.088L3.412 11.85zm1.6-5.173"
                  ></path>
                </svg>
                <span className="title">Health & Beauty</span>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall caret-icon css-1yvnads"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="CartXIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                >
                  <path
                    fill="currentColor"
                    d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
          <div className="hoverMe8">
            <a href="/fashion">
              <div className="category-dropdown-link">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1yvnads"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="PawSimpleIcon"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    d="M7.57 15.376c1.586-3.228 2.38-4.842 3.52-5.227a2.85 2.85 0 0 1 1.82 0c1.14.385 1.934 1.999 3.52 5.227l.878 1.79c.41.833.614 1.25.663 1.534c.201 1.179-.67 2.265-1.846 2.3c-.283.008-.725-.113-1.61-.356a17 17 0 0 0-1.01-.259a7.6 7.6 0 0 0-3.01 0c-.252.051-.505.12-1.01.26c-.885.242-1.327.363-1.61.355c-1.175-.035-2.047-1.121-1.846-2.3c.048-.284.253-.7.663-1.535zM6.145 5.527c.412 1.631 1.576 2.717 2.6 2.426c1.025-.292 1.522-1.85 1.11-3.48c-.412-1.631-1.576-2.717-2.6-2.426c-1.025.292-1.522 1.85-1.11 3.48Zm11.71 0c-.412 1.631-1.576 2.717-2.6 2.426c-1.025-.292-1.522-1.85-1.11-3.48c.412-1.631 1.576-2.717 2.6-2.426c1.025.292 1.522 1.85 1.11 3.48Zm-15.653 6.77c.45 1.205 1.508 1.937 2.363 1.635s1.183-1.524.733-2.73c-.45-1.204-1.508-1.936-2.363-1.634s-1.183 1.524-.733 2.73Zm19.596 0c-.45 1.205-1.508 1.937-2.363 1.635s-1.183-1.524-.733-2.73c.45-1.204 1.508-1.936 2.363-1.634s1.183 1.524.733 2.73Z"
                  ></path>
                </svg>
                <span className="title">Pets</span>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall caret-icon css-1yvnads"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="CartXIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                >
                  <path
                    fill="currentColor"
                    d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
          <div className="hoverMe9">
            <a href="/fashion">
              <div className="category-dropdown-link">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1yvnads"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 576 512"
                  data-testid="TeddyBearLightIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path d="M144 64c0 16.8 8.6 31.6 21.7 40.2c2.7 1.8 4 4.9 3.5 8.1c-.8 4.5-1.2 9.3-1.2 14.4C168 188 220.4 240 288 240s120-52 120-113.3c0-5.2-.4-10-1.2-14.4c-.6-3.1 .8-6.3 3.5-8.1C423.4 95.6 432 80.8 432 64c0-26.5-21.5-48-48-48c-20.3 0-37.8 12.7-44.7 30.6c-1.4 3.6-5.1 5.6-8.9 5C316.3 49 301.7 48 288 48s-28.3 1-42.4 3.5c-3.8 .7-7.5-1.4-8.9-5C229.8 28.7 212.3 16 192 16c-26.5 0-48 21.5-48 48zM192 0c24.8 0 46.3 14.1 56.9 34.8c13.2-2 26.5-2.8 39.1-2.8s25.8 .8 39.1 2.8C337.7 14.1 359.2 0 384 0c35.3 0 64 28.7 64 64c0 20.5-9.7 38.8-24.7 50.5c.5 3.9 .7 7.9 .7 12.1C424 197.4 363.8 256 288 256s-136-58.6-136-129.3c0-4.2 .2-8.2 .7-12.1c-15-11.7-24.7-30-24.7-50.5c0-35.3 28.7-64 64-64zm72 168c0 3.5 1.9 7.4 6.2 10.6s10.6 5.4 17.8 5.4s13.5-2.2 17.8-5.4s6.2-7 6.2-10.6s-1.9-7.4-6.2-10.6s-10.6-5.4-17.8-5.4s-13.5 2.2-17.8 5.4s-6.2 7-6.2 10.6zm24-32c10.4 0 20.1 3.2 27.4 8.6s12.6 13.7 12.6 23.4s-5.3 17.9-12.6 23.4s-17 8.6-27.4 8.6s-20.1-3.2-27.4-8.6s-12.6-13.7-12.6-23.4s5.3-17.9 12.6-23.4s17-8.6 27.4-8.6zm148.3 69c19.3-24.2 54.6-28.1 78.7-8.7s28.1 54.6 8.7 78.7c-30.9 38.6-67.7 68.2-107.7 88.1l0 36.9 48.6 0c3.9-27.1 27.2-48 55.4-48c30.9 0 56 25.1 56 56c0 33.7-14.7 66.8-24.3 85c-6.6 12.4-19.5 19-32.8 19L472 512c0 0 0 0-.1 0l-367.9 0c0 0 0 0-.1 0l-46.9 0c-13.3 0-26.2-6.7-32.8-19C14.7 474.8 0 441.7 0 408c0-30.9 25.1-56 56-56c28.2 0 51.6 20.9 55.4 48l48.6 0 0-36.9c-40.1-20-76.8-49.5-107.7-88.1C33 250.8 36.9 215.6 61 196.3s59.4-15.4 78.7 8.7c42 52.6 96.3 76.5 148.3 76.5s106.2-23.9 148.3-76.5zM103.9 496c0 0 0 0 .1 0l112 0 0-24c0-30.9-25.1-56-56-56c0 0 0 0 0 0l-56 0c-4.4 0-8-3.6-8-8c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 29.6 13.2 59.9 22.5 77.5C41.9 492 49 496 57.1 496l46.8 0zM176 401.8c9.1 2.1 17.5 5.8 24.9 10.9c5.4-34.4 35.2-60.7 71.1-60.7l32 0c35.9 0 65.7 26.3 71.1 60.7c7.4-5.1 15.8-8.9 24.9-10.9l0-43.7c0-3.1 1.8-5.9 4.6-7.2c39.6-18.9 76.1-47.7 106.7-85.9c13.8-17.3 11-42.4-6.2-56.2s-42.4-11-56.2 6.2c-44.9 56.1-103.7 82.5-160.8 82.5s-115.9-26.4-160.8-82.5c-13.8-17.3-39-20-56.2-6.2s-20 39-6.2 56.2c30.6 38.3 67.1 67 106.7 85.9c2.8 1.3 4.6 4.1 4.6 7.2l0 43.7zm40 25c10 12.4 16 28.1 16 45.3l0 24 112 0 0-24c0-17.1 6-32.9 16-45.3l0-2.7c0-30.9-25.1-56-56-56l-32 0c-30.9 0-56 25.1-56 56l0 2.7zM416 416c-30.9 0-56 25.1-56 56l0 24 112 0c0 0 0 0 .1 0l46.8 0c8.1 0 15.2-4 18.7-10.5c9.3-17.6 22.5-47.8 22.5-77.5c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 4.4-3.6 8-8 8l-56 0s0 0 0 0zM240 100a12 12 0 1 1 0 24 12 12 0 1 1 0-24zm84 12a12 12 0 1 1 24 0 12 12 0 1 1 -24 0z"></path>
                </svg>
                <span className="title">Baby Toys</span>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall caret-icon css-1yvnads"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="CartXIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                >
                  <path
                    fill="currentColor"
                    d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
          <div className="hoverMe10">
            <a href="/fashion">
              <div className="category-dropdown-link">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1yvnads"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="BasketShoppingIcon"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M3.864 16.455c-.858-3.432-1.287-5.147-.386-6.301S6.148 9 9.685 9h4.63c3.538 0 5.306 0 6.207 1.154s.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91Z"></path>
                    <path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4"></path>
                    <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 13v4m8-4v4m-4-4v4"
                    ></path>
                  </g>
                </svg>
                <span className="title">Groceries</span>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall caret-icon css-1yvnads"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="CartXIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                >
                  <path
                    fill="currentColor"
                    d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
          <div className="hoverMe11">
            <a href="/fashion">
              <div className="category-dropdown-link">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1yvnads"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 512 512"
                  data-testid="TireRuggedLightIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path d="M236.5 16c-17.5 0-32.1 13.6-33.3 31.1l-.1 1.1c-.2 3.4-2.6 6.3-5.8 7.2c-14.8 4.1-29 9.9-42.3 17c-2.9 1.6-6.6 1.2-9.1-1l-.5-.4 5.3-6-5.3 6c-13.2-11.6-33.1-10.9-45.5 1.5L72.5 100.1c-12.4 12.4-13.1 32.3-1.5 45.5l.4 .5c2.2 2.5 2.6 6.1 1 9.1c-7.2 13.3-12.9 27.4-17 42.3c-.9 3.3-3.8 5.6-7.2 5.8l-1.1 .1C29.6 204.4 16 219 16 236.5l0 38.9c0 17.5 13.6 32.1 31.1 33.3l3.5 .2c3.3 .2 6.1 2.4 7.1 5.5c4.4 13.7 10.2 26.8 17.3 39.1c1.7 3 1.3 6.7-.9 9.3L71 366.4c-11.6 13.2-10.9 33.1 1.5 45.5l27.5 27.5c12.4 12.4 32.3 13.1 45.5 1.5l6.2-5.4c2.4-2.1 5.9-2.6 8.9-1.1c11.5 5.8 23.6 10.5 36.2 14c3.3 .9 5.6 3.8 5.8 7.2l.6 9.3c1.2 17.5 15.7 31.1 33.3 31.1l38.9 0c17.5 0 32.1-13.6 33.3-31.1l.8-11.7c.2-3.3 2.4-6.1 5.5-7.1c11.5-3.7 22.6-8.5 33.2-14.2c2.9-1.6 6.5-1.2 9 1l9.2 8c13.2 11.6 33.1 10.9 45.5-1.5l27.5-27.5c12.4-12.4 13.1-32.3 1.5-45.5l-8-9.2c-2.2-2.5-2.6-6.1-1-9c5.7-10.5 10.4-21.6 14.1-33.2c1-3.1 3.8-5.3 7.1-5.5l11.7-.8c17.5-1.2 31.1-15.7 31.1-33.3l0-38.9c0-17.5-13.6-32.1-31.1-33.3l-9.3-.6c-3.4-.2-6.3-2.6-7.2-5.8c-3.5-12.6-8.2-24.7-14-36.2c-1.5-2.9-1-6.4 1.1-8.9l5.4-6.2c11.6-13.2 10.9-33.1-1.5-45.5L411.9 72.5c-12.4-12.4-32.3-13.1-45.5-1.5l-3.6 3.1c-2.6 2.3-6.3 2.6-9.3 .9c-12.3-7.1-25.4-12.9-39.1-17.3c-3.1-1-5.3-3.8-5.5-7.1l-.2-3.5C307.6 29.6 293 16 275.5 16l-38.9 0zM187.8 41.5C191.6 17.8 212.1 0 236.5 0l38.9 0c25.4 0 46.5 19.2 49.1 44.2c11.1 3.9 21.8 8.6 32 14.2c19.5-16.5 48.5-15.3 66.7 2.8l27.5 27.5c18.4 18.4 19.3 47.8 2.2 67.4l-1.9 2.2c4.4 9.3 8.1 18.9 11.1 28.8l3.7 .2c25.9 1.7 46.1 23.3 46.1 49.2l0 38.9c0 26-20.1 47.5-46.1 49.2l-6.4 .4c-3.1 8.8-6.8 17.4-11 25.7l4.4 5.1c17.1 19.5 16.1 49-2.2 67.4l-27.5 27.5c-18.4 18.4-47.8 19.3-67.4 2.2l-5.1-4.4c-8.3 4.2-16.9 7.8-25.7 11l-.4 6.4C323 491.9 301.4 512 275.5 512l-38.9 0c-26 0-47.5-20.1-49.2-46.1l-.2-3.7c-9.9-3.1-19.5-6.8-28.8-11.2l-2.2 1.9c-19.5 17.1-49 16.1-67.4-2.2L61.2 423.3c-18.2-18.2-19.3-47.1-2.8-66.7c-5.5-10.2-10.3-20.9-14.2-32C19.2 321.9 0 300.8 0 275.5l0-38.9c0-24.4 17.8-44.9 41.5-48.7c3.8-12.4 8.6-24.3 14.4-35.6C42.1 132.8 44 105.9 61.2 88.7L88.7 61.2c17.2-17.2 44.1-19.1 63.5-5.3c11.3-5.8 23.2-10.6 35.6-14.4zM112 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zM256 384a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-208a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm-65.8 75.4a16 16 0 1 1 9.9-30.4 16 16 0 1 1 -9.9 30.4zM209 320.7a16 16 0 1 1 18.8-25.9A16 16 0 1 1 209 320.7zm97.6-22.3a16 16 0 1 1 -25.9 18.8 16 16 0 1 1 25.9-18.8zm25.5-67.1a16 16 0 1 1 -30.4 9.9 16 16 0 1 1 30.4-9.9z"></path>
                </svg>
                <span className="title">Automotive</span>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall caret-icon css-1yvnads"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="CartXIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                >
                  <path
                    fill="currentColor"
                    d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

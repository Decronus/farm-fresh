<template>
    <div class="nav-top-and-search" ref="refHeader">
        <div class="nav-top">
            <router-link to="/">
                <div class="logo-wrap">
                    <svg width="139" height="22" viewBox="0 0 139 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.18 1.8C14.58 1.74 13.71 1.59 12.57 1.35C11.69 1.15 10.94 0.999999 10.32 0.899999C9.7 0.8 8.96 0.739999 8.1 0.719998C7.16 0.779999 6.52 1.14 6.18 1.8C5.84 2.44 5.67 3.47 5.67 4.89C5.67 6.19 5.8 7.16 6.06 7.8C6.34 8.44 6.85 8.84 7.59 9C8.25 8.92 9.07 8.76 10.05 8.52C11.25 8.28 12.14 8.13 12.72 8.07V10.8C11.96 10.74 11.06 10.58 10.02 10.32C8.84 10.08 8.04 9.93 7.62 9.87C6.9 10.01 6.4 10.38 6.12 10.98C5.84 11.58 5.69 12.47 5.67 13.65C5.69 14.57 5.75 15.39 5.85 16.11C5.95 16.81 6.1 17.56 6.3 18.36C6.54 19.56 6.69 20.44 6.75 21H0.9C0.96 20.4 1.11 19.51 1.35 18.33C1.55 17.39 1.7 16.56 1.8 15.84C1.92 15.12 1.98 14.26 1.98 13.26V7.74C1.98 6.72 1.92 5.85 1.8 5.13C1.7 4.41 1.55 3.58 1.35 2.64C1.11 1.52 0.96 0.639999 0.9 -1.43051e-06H15.18V1.8ZM29.1316 18.96C29.4716 18.96 29.8216 18.85 30.1816 18.63L29.7016 20.88C29.5016 20.9 29.2316 20.91 28.8916 20.91C27.7916 20.91 26.9316 20.74 26.3116 20.4C25.6916 20.06 25.2216 19.52 24.9016 18.78C24.4816 19.54 23.8616 20.14 23.0416 20.58C22.2416 21.02 21.2416 21.24 20.0416 21.24C18.3016 21.24 16.8816 20.86 15.7816 20.1C14.6816 19.34 14.1316 18.2 14.1316 16.68C14.1316 15.6 14.4316 14.76 15.0316 14.16C15.6516 13.56 16.3516 13.14 17.1316 12.9C17.9116 12.66 19.0516 12.39 20.5516 12.09C21.3916 11.89 22.0716 11.69 22.5916 11.49C23.1116 11.29 23.5216 10.99 23.8216 10.59C24.1416 10.19 24.3016 9.66 24.3016 9C24.3016 8.4 24.2016 7.94 24.0016 7.62C23.8016 7.28 23.4416 7.11 22.9216 7.11C22.3216 7.11 21.3316 7.42 19.9516 8.04C18.5916 8.66 17.3616 9.31 16.2616 9.99L14.7016 7.08C15.4816 6.68 16.4716 6.36 17.6716 6.12C18.8916 5.88 20.1616 5.76 21.4816 5.76C23.5416 5.76 25.1316 6.12 26.2516 6.84C27.3916 7.56 27.9716 8.69 27.9916 10.23V14.64C27.9916 15.9 28.0616 16.93 28.2016 17.73C28.3416 18.53 28.6516 18.94 29.1316 18.96ZM20.7316 20.4C21.9916 20.4 22.9016 19.82 23.4616 18.66C24.0216 17.48 24.3016 15.9 24.3016 13.92V12.18C23.1816 12.42 22.2916 12.65 21.6316 12.87C19.1916 13.73 17.9716 15.21 17.9716 17.31C17.9716 18.19 18.2016 18.93 18.6616 19.53C19.1416 20.11 19.8316 20.4 20.7316 20.4ZM40.553 6.03C41.453 6.03 42.203 6.18 42.803 6.48L41.153 9.36C41.033 8.92 40.863 8.59 40.643 8.37C40.423 8.15 40.073 8.04 39.593 8.04C38.893 8.04 38.273 8.31 37.733 8.85C37.193 9.39 36.763 10.09 36.443 10.95C36.143 11.79 35.983 12.68 35.963 13.62C35.983 14.54 36.043 15.35 36.143 16.05C36.243 16.75 36.393 17.52 36.593 18.36C36.833 19.56 36.983 20.44 37.043 21H31.193C31.253 20.44 31.403 19.56 31.643 18.36C31.843 17.5 31.993 16.72 32.093 16.02C32.193 15.3 32.253 14.46 32.273 13.5C32.253 12.54 32.193 11.7 32.093 10.98C31.993 10.24 31.843 9.46 31.643 8.64C31.403 7.44 31.253 6.56 31.193 6H37.043C37.003 6.7 36.853 7.56 36.593 8.58L36.443 9.27C36.863 8.29 37.403 7.51 38.063 6.93C38.743 6.33 39.573 6.03 40.553 6.03ZM66.6584 13.38C66.6784 14.38 66.7384 15.24 66.8384 15.96C66.9384 16.68 67.0884 17.47 67.2884 18.33C67.5284 19.51 67.6784 20.4 67.7384 21H61.8884C61.9484 20.4 62.0984 19.51 62.3384 18.33C62.5384 17.49 62.6884 16.7 62.7884 15.96C62.8884 15.22 62.9484 14.35 62.9684 13.35C62.9684 11.73 62.8084 10.4 62.4884 9.36C62.1884 8.32 61.5684 7.8 60.6284 7.8C59.9684 7.8 59.3984 8.09 58.9184 8.67C58.4584 9.23 58.0984 9.94 57.8384 10.8C57.5984 11.66 57.4684 12.53 57.4484 13.41C57.4684 14.39 57.5284 15.24 57.6284 15.96C57.7284 16.68 57.8784 17.47 58.0784 18.33C58.3184 19.53 58.4684 20.42 58.5284 21H52.6784C52.7384 20.4 52.8884 19.51 53.1284 18.33C53.3284 17.49 53.4784 16.7 53.5784 15.96C53.6784 15.22 53.7384 14.35 53.7584 13.35C53.7584 11.69 53.5984 10.32 53.2784 9.24C52.9784 8.14 52.3584 7.59 51.4184 7.59C50.8384 7.59 50.3184 7.86 49.8584 8.4C49.3984 8.92 49.0284 9.59 48.7484 10.41C48.4684 11.23 48.3084 12.06 48.2684 12.9C48.2484 13.02 48.2384 13.22 48.2384 13.5C48.2584 14.46 48.3184 15.3 48.4184 16.02C48.5184 16.72 48.6684 17.5 48.8684 18.36C49.1084 19.56 49.2584 20.44 49.3184 21H43.4684C43.5284 20.44 43.6784 19.56 43.9184 18.36C44.1184 17.5 44.2684 16.72 44.3684 16.02C44.4684 15.3 44.5284 14.46 44.5484 13.5C44.5284 12.54 44.4684 11.7 44.3684 10.98C44.2684 10.24 44.1184 9.46 43.9184 8.64C43.6784 7.44 43.5284 6.56 43.4684 6H49.3184C49.2784 6.46 49.1784 7.11 49.0184 7.95C49.9384 6.67 51.2084 6.03 52.8284 6.03C54.4084 6.03 55.5284 6.46 56.1884 7.32C56.8684 8.16 57.2684 9.26 57.3884 10.62C57.5884 9.4 58.0584 8.33 58.7984 7.41C59.5584 6.49 60.6384 6.03 62.0384 6.03C63.3784 6.03 64.3884 6.35 65.0684 6.99C65.7484 7.63 66.1784 8.4 66.3584 9.3C66.5584 10.18 66.6584 11.19 66.6584 12.33V13.38ZM83.3831 1.8C82.7831 1.74 81.9131 1.59 80.7731 1.35C79.8931 1.15 79.1431 0.999999 78.5231 0.899999C77.9031 0.8 77.1631 0.739999 76.3031 0.719998C75.3631 0.779999 74.7231 1.14 74.3831 1.8C74.0431 2.44 73.8731 3.47 73.8731 4.89C73.8731 6.19 74.0031 7.16 74.2631 7.8C74.5431 8.44 75.0531 8.84 75.7931 9C76.4531 8.92 77.2731 8.76 78.2531 8.52C79.4531 8.28 80.3431 8.13 80.9231 8.07V10.8C80.1631 10.74 79.2631 10.58 78.2231 10.32C77.0431 10.08 76.2431 9.93 75.8231 9.87C75.1031 10.01 74.6031 10.38 74.3231 10.98C74.0431 11.58 73.8931 12.47 73.8731 13.65C73.8931 14.57 73.9531 15.39 74.0531 16.11C74.1531 16.81 74.3031 17.56 74.5031 18.36C74.7431 19.56 74.8931 20.44 74.9531 21H69.1031C69.1631 20.4 69.3131 19.51 69.5531 18.33C69.7531 17.39 69.9031 16.56 70.0031 15.84C70.1231 15.12 70.1831 14.26 70.1831 13.26V7.74C70.1831 6.72 70.1231 5.85 70.0031 5.13C69.9031 4.41 69.7531 3.58 69.5531 2.64C69.3131 1.52 69.1631 0.639999 69.1031 -1.43051e-06H83.3831V1.8ZM92.4377 6.03C93.3377 6.03 94.0877 6.18 94.6877 6.48L93.0377 9.36C92.9177 8.92 92.7477 8.59 92.5277 8.37C92.3077 8.15 91.9577 8.04 91.4777 8.04C90.7777 8.04 90.1577 8.31 89.6177 8.85C89.0777 9.39 88.6477 10.09 88.3277 10.95C88.0277 11.79 87.8677 12.68 87.8477 13.62C87.8677 14.54 87.9277 15.35 88.0277 16.05C88.1277 16.75 88.2777 17.52 88.4777 18.36C88.7177 19.56 88.8677 20.44 88.9277 21H83.0777C83.1377 20.44 83.2877 19.56 83.5277 18.36C83.7277 17.5 83.8777 16.72 83.9777 16.02C84.0777 15.3 84.1377 14.46 84.1577 13.5C84.1377 12.54 84.0777 11.7 83.9777 10.98C83.8777 10.24 83.7277 9.46 83.5277 8.64C83.2877 7.44 83.1377 6.56 83.0777 6H88.9277C88.8877 6.7 88.7377 7.56 88.4777 8.58L88.3277 9.27C88.7477 8.29 89.2877 7.51 89.9477 6.93C90.6277 6.33 91.4577 6.03 92.4377 6.03ZM103.224 18.99C104.084 18.99 104.814 18.73 105.414 18.21C106.014 17.67 106.324 16.98 106.344 16.14H107.454C107.394 17.7 106.874 18.99 105.894 20.01C104.934 21.01 103.544 21.51 101.724 21.51C99.6037 21.51 97.8637 20.86 96.5037 19.56C95.1437 18.24 94.4637 16.25 94.4637 13.59C94.4637 11.71 94.7037 10.2 95.1837 9.06C95.6837 7.9 96.4637 7.06 97.5237 6.54C98.5837 6 99.9737 5.73 101.694 5.73C105.554 5.73 107.484 6.98 107.484 9.48C107.484 11.26 106.644 12.56 104.964 13.38C103.284 14.18 101.334 14.64 99.1137 14.76C99.4137 16.18 99.9137 17.24 100.614 17.94C101.334 18.64 102.204 18.99 103.224 18.99ZM101.724 6.48C100.724 6.48 99.9937 6.95 99.5337 7.89C99.0937 8.81 98.8737 10.16 98.8737 11.94C98.8737 12.56 98.9037 13.14 98.9637 13.68C100.384 13.54 101.554 13.11 102.474 12.39C103.414 11.67 103.884 10.66 103.884 9.36C103.884 8.44 103.704 7.73 103.344 7.23C102.984 6.73 102.444 6.48 101.724 6.48ZM115.797 21.24C114.017 21.24 112.407 20.99 110.967 20.49C109.527 19.97 108.557 19.24 108.057 18.3L111.177 15.75C111.317 17.23 111.807 18.4 112.647 19.26C113.487 20.1 114.547 20.52 115.827 20.52C116.727 20.52 117.467 20.31 118.047 19.89C118.647 19.45 118.947 18.85 118.947 18.09C118.947 17.53 118.637 17.07 118.017 16.71C117.397 16.35 116.417 15.94 115.077 15.48C114.477 15.28 114.027 15.12 113.727 15C112.187 14.44 110.977 13.81 110.097 13.11C109.217 12.39 108.777 11.46 108.777 10.32C108.777 8.74 109.377 7.58 110.577 6.84C111.797 6.1 113.457 5.73 115.557 5.73C116.877 5.73 118.127 5.86 119.307 6.12C120.487 6.38 121.327 6.67 121.827 6.99L120.237 9.93C119.937 9.71 119.677 9.48 119.457 9.24C119.257 9 119.017 8.69 118.737 8.31C118.277 7.67 117.837 7.2 117.417 6.9C116.997 6.6 116.377 6.45 115.557 6.45C114.657 6.45 113.907 6.7 113.307 7.2C112.727 7.68 112.437 8.31 112.437 9.09C112.437 9.81 112.797 10.39 113.517 10.83C114.257 11.27 115.357 11.75 116.817 12.27C118.117 12.71 119.137 13.1 119.877 13.44C120.637 13.78 121.287 14.23 121.827 14.79C122.387 15.35 122.667 16.02 122.667 16.8C122.667 18.3 122.047 19.42 120.807 20.16C119.587 20.88 117.917 21.24 115.797 21.24ZM137.575 13.38C137.595 14.38 137.655 15.24 137.755 15.96C137.855 16.68 138.005 17.47 138.205 18.33C138.445 19.51 138.595 20.4 138.655 21H132.805C132.865 20.4 133.015 19.51 133.255 18.33C133.455 17.49 133.605 16.7 133.705 15.96C133.805 15.22 133.865 14.35 133.885 13.35C133.885 11.69 133.725 10.32 133.405 9.24C133.105 8.14 132.485 7.59 131.545 7.59C130.945 7.59 130.395 7.89 129.895 8.49C129.415 9.07 129.035 9.81 128.755 10.71C128.495 11.61 128.365 12.49 128.365 13.35C128.365 14.35 128.415 15.21 128.515 15.93C128.635 16.65 128.795 17.46 128.995 18.36C129.235 19.56 129.385 20.44 129.445 21H123.595C123.655 20.4 123.805 19.51 124.045 18.33C124.245 17.39 124.395 16.56 124.495 15.84C124.615 15.12 124.675 14.26 124.675 13.26V7.74C124.675 6.72 124.615 5.85 124.495 5.13C124.395 4.41 124.245 3.58 124.045 2.64C123.805 1.52 123.655 0.639999 123.595 -1.43051e-06H129.445C129.385 0.639999 129.235 1.52 128.995 2.64C128.795 3.58 128.635 4.41 128.515 5.13C128.415 5.85 128.365 6.72 128.365 7.74V9.48C128.705 8.5 129.245 7.68 129.985 7.02C130.745 6.36 131.735 6.03 132.955 6.03C134.295 6.03 135.305 6.35 135.985 6.99C136.665 7.63 137.095 8.4 137.275 9.3C137.475 10.18 137.575 11.19 137.575 12.33V13.38Z"
                            fill="#208B1C"
                        />
                    </svg>
                </div>
            </router-link>

            <div class="menu-and-city-wrap">
                <div class="menu-wrap">
                    <p class="menu-item">?? ??????????????</p>
                    <p class="menu-item">????????????????</p>
                </div>
                <div class="city-wrap menu-item" @click="selectCityModalVisibility = true">
                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5 0C2.23571 0 0 2.191 0 4.9C0 8.575 5 14 5 14C5 14 10 8.575 10 4.9C10 2.191 7.76429 0 5 0ZM5 6.65C4.01429 6.65 3.21429 5.866 3.21429 4.9C3.21429 3.934 4.01429 3.15 5 3.15C5.98571 3.15 6.78571 3.934 6.78571 4.9C6.78571 5.866 5.98571 6.65 5 6.65Z"
                            fill="#57C053"
                        />
                    </svg>

                    <p class="menu-item">{{ $store.state.currentCity || "???????????????? ??????????" }}</p>
                </div>
            </div>
            <div class="burger">
                <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="28" height="2" rx="1" fill="#57C053" />
                    <rect y="7" width="28" height="2" rx="1" fill="#57C053" />
                    <rect y="14" width="28" height="2" rx="1" fill="#57C053" />
                </svg>
            </div>
        </div>
        <div class="search-menu">
            <button-comp class="catalog" title="??????????????" width="140">
                <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="28" height="2" rx="1" fill="white" />
                    <rect y="7" width="28" height="2" rx="1" fill="white" />
                    <rect y="14" width="28" height="2" rx="1" fill="white" />
                </svg>
            </button-comp>

            <div class="search-wrap">
                <input type="text" class="search-input" placeholder="?????????? ???? ??????????" />
                <button-comp
                    class="search-button"
                    title="??????????"
                    width="100"
                    fontSize="16"
                    borderRadius="0 12px 12px 0"
                    style="filter: none"
                >
                </button-comp>
            </div>

            <div class="search-menu-buttons">
                <router-link to="cart">
                    <button-comp class="search-menu-item">
                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.13691 24.2482C7.52457 24.2482 6.22003 25.5674 6.22003 27.1798C6.22003 28.7921 7.52457 30.1113 9.13691 30.1113C10.7493 30.1113 12.0685 28.7921 12.0685 27.1798C12.0685 25.5674 10.7493 24.2482 9.13691 24.2482ZM0.342285 0.795898V3.72744H3.27383L8.55061 14.8526L6.57181 18.4438C6.33729 18.8542 6.20537 19.3379 6.20537 19.8509C6.20537 21.4633 7.52457 22.7825 9.13691 22.7825H26.7262V19.8509H9.75254C9.54733 19.8509 9.3861 19.6897 9.3861 19.4845L9.43007 19.3086L10.7493 16.9194H21.6693C22.7686 16.9194 23.736 16.3184 24.2344 15.4096L29.4818 5.89678C29.5991 5.69158 29.6577 5.44239 29.6577 5.19321C29.6577 4.38704 28.9981 3.72744 28.1919 3.72744H6.51318L5.13536 0.795898H0.342285ZM23.7946 24.2482C22.1823 24.2482 20.8777 25.5674 20.8777 27.1798C20.8777 28.7921 22.1823 30.1113 23.7946 30.1113C25.407 30.1113 26.7262 28.7921 26.7262 27.1798C26.7262 25.5674 25.407 24.2482 23.7946 24.2482Z"
                                fill="white"
                            />
                        </svg>

                        <div class="cart-products-counter" v-if="$store.state.productsInCart.length > 0">
                            {{ $store.state.productsInCart.length }}
                        </div>
                    </button-comp>
                </router-link>

                <button-comp class="search-menu-item">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 4.5C17.49 4.5 19.5 6.51 19.5 9C19.5 11.49 17.49 13.5 15 13.5C12.51 13.5 10.5 11.49 10.5 9C10.5 6.51 12.51 4.5 15 4.5ZM15 25.8C11.25 25.8 7.935 23.88 6 20.97C6.045 17.985 12 16.35 15 16.35C17.985 16.35 23.955 17.985 24 20.97C22.065 23.88 18.75 25.8 15 25.8Z"
                            fill="white"
                        />
                    </svg>
                </button-comp>
            </div>
        </div>
    </div>

    <modal-comp :visibility="selectCityModalVisibility" @close="this.selectCityModalVisibility = false">
        <div class="city-list">
            <p class="city-item" @click="cityChoice">??????</p>
            <p class="city-item" @click="cityChoice">??????????</p>
            <p class="city-item" @click="cityChoice">??????????</p>
            <p class="city-item" @click="cityChoice">??????????????????</p>
            <p class="city-item" @click="cityChoice">??????????</p>
            <p class="city-item" @click="cityChoice">????????????-????????</p>
        </div>
    </modal-comp>
</template>

<script>
export default {
    name: "header-comp",
    data() {
        return {
            selectCityModalVisibility: false,
            prevScrollY: null,
            currentScrollY: 0,
        };
    },
    methods: {
        cityChoice(event) {
            this.$store.commit("cityChoice", event.target.textContent);
            this.selectCityModalVisibility = false;
        },

        scrollListener() {
            const headerRect = this.$refs.refHeader.getBoundingClientRect();

            this.prevScrollY = this.currentScrollY;
            this.currentScrollY = scrollY;

            if (scrollY > headerRect.height * 0.7) {
                if (this.currentScrollY > this.prevScrollY) {
                    if (![...this.$refs.refHeader.classList].includes("header-hidden")) {
                        this.$refs.refHeader.classList.add("header-hidden");
                    }
                }
                if (this.currentScrollY < this.prevScrollY) {
                    if ([...this.$refs.refHeader.classList].includes("header-hidden")) {
                        this.$refs.refHeader.classList.remove("header-hidden");
                    }
                }
            }
        },

        // openModal() {
        //     this.$router.push("catalog");
        //     this.selectCityModalVisibility = true;
        // },

        // closeModal() {
        //     this.$router.back();
        //     this.selectCityModalVisibility = false;
        // },
    },

    mounted() {
        window.addEventListener("scroll", this.scrollListener);
    },
};
</script>

<style scoped>
.nav-top-and-search {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0 30px 0;
    margin-bottom: 30px;
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 10;
    transition: all 0.4s ease-in-out;
}

.header-hidden {
    transform: translateY(-100%);
}

.shadowed {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.9);
}

.nav-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    gap: 42px;
    font-weight: 400;
}

.logo-and-menu-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 48px;
}

.menu-wrap {
    display: flex;
    gap: 32px;
}

.menu-item {
    cursor: pointer;
    font-weight: 400;
}

.v-field__append-inner {
    background: none;
}

.city-wrap {
    display: flex;
    align-items: center;
    gap: 6px;
}

.menu-and-city-wrap {
    display: flex;
    width: 1200px;
    justify-content: space-between;
}

.search-menu {
    display: flex;
    gap: 20px;
}

.search-wrap {
    display: flex;
    width: 100%;
}

.search-input {
    width: 100%;
    height: 50px;
    border: 2px solid #57c053;
    border-radius: 12px 0 0 12px;
    padding: 0 20px;
    font-size: 16px;
    outline: none;
}

.search-input::placeholder {
    color: #c8c8c8;
}

.search-menu-buttons {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.button.search-menu-item {
    width: 60px;
    height: 50px;
}

.city-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    font-weight: 500;
    padding: 50px;
}

.city-item {
    cursor: pointer;
}

.burger {
    display: none;
    align-items: center;
    cursor: pointer;
}

.cart-products-counter {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: #e65823;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);
    top: -5px;
    right: -5px;
    font-size: 12px;
    border-radius: 50%;
}

@media (max-width: 660px) {
    .nav-top-and-search {
        padding-bottom: 20px;
        margin-bottom: 10px;
    }

    .burger {
        display: flex;
    }

    .menu-and-city-wrap {
        display: none;
    }

    .button.catalog {
        display: none;
    }

    .button.search-button {
        display: none;
    }

    .button.search-menu-item {
        width: 40px;
        height: 40px;
    }

    .button.search-menu-item svg {
        height: 20px;
    }

    .search-menu {
        gap: 10px;
    }

    .search-menu-buttons {
        gap: 10px;
    }

    .search-input {
        border-radius: 12px;
        height: 40px;
        padding: 0 15px;
    }
}
</style>

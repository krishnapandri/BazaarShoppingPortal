export const Loader = ()=>{
    return (
        <>
        <style>
            {
                                `/* Basic navbar styling */
                .navbar {
                position: relative; /* Ensure navbar is positioned normally */
                background-color: #333;
                color: white;
                padding: 10px;
                }

                .navbar ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                display: flex;
                }

                .navbar ul li {
                margin-right: 20px;
                }

                .navbar ul li a {
                color: white;
                text-decoration: none;
                }

                /* Loader styling */
                .loader {
                position: fixed; /* Make it fixed on the page */
                top: 0; /* At the top of the page */
                left: 0;
                width: 100%; /* Full width of the screen */
                height: 4px; /* Set the height of the loader */
                background-color: #3498db; /* Color of the loader */
                z-index: 9999; /* Make sure it appears above the navbar */
                animation: load 3s ease-in-out infinite; /* Animation for the loader */
                }

                /* Loader animation */
                @keyframes load {
                0% {
                    width: 0;
                }
                50% {
                    width: 50%;
                }
                100% {
                    width: 100%;
                }
                }
`
            }
        </style>
            <div class="loader"></div>
                <nav class="navbar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}
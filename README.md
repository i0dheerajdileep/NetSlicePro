# NetSlicePro: Collaborative Bandwidth Sharing for Public Wi-Fi Networks

[![License](https://img.shields.io/badge/license-All%20Rights%20Reserved-red)](LICENSE)

## Overview

NetSlicePro is a project dedicated to advancing collaborative bandwidth sharing in public Wi-Fi networks. The project aims to optimize bandwidth allocation and enhance user experiences through innovative network slicing techniques.

## Features

- Collaborative bandwidth sharing for improved network performance.
- Network slicing technology for creating tailored network segments.
- Load balancing for efficient resource allocation.
- Intuitive interface for adjusting bandwidth settings.

## Installation and Usage

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/i0dheerajdileep/NetSlicePro.git
    ```

2. Set up your router settings in the `config.js` file.

3. Start the server:

    ```bash
    npm start
    ```

4. Access the API to adjust bandwidth based on user preferences:

    ```bash
    # Example curl command to adjust bandwidth
    curl -X POST -H "Content-Type: application/json" -d '{"ip": "user_ip_address", "bandwidth": "desired_bandwidth"}' http://localhost:3000/adjust-bandwidth
    ```

## License and Contact

This project is released under the **All Rights Reserved** license. You are not allowed to use, modify, or distribute this code without explicit permission from the author. For more details, see the [LICENSE](LICENSE) file.

For inquiries, please contact i.dheerajdileep@gmail.com.

#!/bin/bash

IP=$1
NEW_BANDWIDTH=$2  # New bandwidth in Kbps

# Modify the existing traffic control rule for the IP
tc class change dev eth0 parent 1:0 classid 1:10 htb rate ${NEW_BANDWIDTH}kbps burst 15k
#The eth0 network interface is assumed; make sure to replace it with the actual network interface name if it's different.

echo "Bandwidth increased for IP: ${IP} to ${NEW_BANDWIDTH} Kbps"

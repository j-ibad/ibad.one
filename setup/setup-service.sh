#!/bin/bash
cp ibadone.service /etc/systemd/system/
systemctl enable ibadone.service
systemctl daemon-reload
systemctl start ibadone

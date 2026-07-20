---
title: "Tachometer + Gear Indicator"
date: 2021-06-01
category: firmware
status: completed
summary: "LED bar and gear display that show the engine's RPM and current gear in real time, reading telemetry data."
cover: /images/tach-01.jpg
images:
  - src: /images/tach-01.jpg
    alt: "Tachometer LED bar"
    caption: "Tachometer LED bar"
  - src: /images/placeholder.svg
    alt: "Photo pending: gear indicator mounted in the cockpit"
    caption: "Indicator's location in the cockpit"
videos:
  - src: https://youtu.be/AYl0Dx2568s
    title: "Tachometer and gear indicator demo"
    caption: "LED sequence reacting to RPM and gear indicator updating in real time"
specs:
  - label: "Data source"
    value: "PENDING (e.g. the game's UDP telemetry)"
  - label: "Microcontroller"
    value: "PENDING (e.g. Arduino Nano/ESP32)"
  - label: "LEDs"
    value: "PENDING (e.g. WS2812B addressable strip)"
  - label: "Gear display"
    value: "PENDING (e.g. 7-segment display)"
tags: ["tachometer", "gear-indicator", "leds", "telemetry", "firmware"]
order: 1
---

<!--
TODO:
- Which game(s) you use as the telemetry source and how the data is extracted (UDP, API, etc.)
- How that data is processed and translated into the LED sequence and gear number
- Firmware: communication protocol with the PC, progressive lighting logic, cutoff zone
- Physical mounting of the indicator in the cockpit
-->

## Data source

Placeholder: where the RPM and gear data come from (simulator telemetry).

## Processing

Placeholder: how the RPM value is translated into the LED sequence and how the gear is displayed.

## Firmware and hardware

Placeholder: microcontroller, LED strip, gear display, communication protocol.

## Mounting

Placeholder: where and how it was installed in the cockpit.

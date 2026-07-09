---
title: "Pedal Set"
date: 2021-09-05
category: electronics
status: iterating
summary: "Custom-built brake/throttle/clutch pedal set with sensors, custom reading electronics, and firmware."
cover: /images/pedals-01.jpg
images:
  - src: /images/pedals-01.jpg
    alt: "Finished pedal set"
    caption: "Finished pedal set, side view"
  - src: /images/placeholder.svg
    alt: "Photo pending: brake load cell sensor"
    caption: "Load cell detail on the brake pedal"
  - src: /images/placeholder.svg
    alt: "Photo pending: pedal set electronics board"
    caption: "PCB / protoboard with the reading electronics"
videos:
  - title: "Video pending: pedal response test"
    caption: "Before/after comparison of the calibration curves"
specs:
  - label: "Brake sensor"
    value: "PENDING (e.g. load cell + HX711)"
  - label: "Throttle/clutch sensors"
    value: "PENDING (e.g. potentiometers / Hall-effect sensors)"
  - label: "Microcontroller"
    value: "PENDING (e.g. Arduino Leonardo / Pro Micro / ESP32)"
  - label: "PC interface"
    value: "PENDING (e.g. native HID joystick)"
tags: ["pedals", "electronics", "load-cell", "firmware"]
order: 0
---

<!--
TODO:
- Why you built your own pedal set instead of buying one
- Sensor choices (load cell for brake, potentiometers/Hall for throttle and clutch)
- Pedal mechanical design (springs, elastomers, angle, progressive resistance)
- Electronics: schematic, components, why that board
- Firmware: what it does (sensor reading, signal filtering, response curve, HID output)
- Iterations and problems solved (signal noise, load cell drift, calibration)
-->

## Why a custom pedal set

Placeholder: motivation and limitations of commercial options.

## Mechanical design

Placeholder: pedal structure, resistance system (spring/elastomer), adjustments.

## Electronics

Placeholder: sensors used, electrical schematic, reading board.

## Firmware

Placeholder: firmware logic (reading, filtering, curve mapping, communication with the PC).

## Iterations

Placeholder: problems encountered (noise, drift, saturation) and how they were resolved over time.

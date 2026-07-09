---
title: "Indicador de RPM / shift lights"
date: 2022-08-01
category: firmware
status: completado
summary: "Barra de LEDs que muestra las RPM del motor en el juego en tiempo real, leyendo datos de telemetría."
cover: /images/placeholder.svg
images:
  - src: /images/placeholder.svg
    alt: "Foto pendiente: barra de LEDs de RPM encendida"
    caption: "Shift light en funcionamiento durante una vuelta"
  - src: /images/placeholder.svg
    alt: "Foto pendiente: montaje del indicador en el cockpit"
    caption: "Ubicación del indicador en el cockpit"
videos:
  - title: "Video pendiente: shift light reaccionando a las RPM en el juego"
    caption: "Secuencia de LEDs subiendo de vueltas hasta la zona de corte"
specs:
  - label: "Fuente de datos"
    value: "PENDIENTE (ej: telemetría UDP del juego)"
  - label: "Microcontrolador"
    value: "PENDIENTE (ej: Arduino Nano/ESP32)"
  - label: "LEDs"
    value: "PENDIENTE (ej: tira addressable WS2812B)"
tags: ["rpm", "leds", "telemetria", "firmware"]
order: 1
---

<!--
TODO:
- Qué juego(s) usás como fuente de telemetría y cómo se extraen los datos (UDP, API, etc.)
- Cómo se procesan esos datos y se traducen a la secuencia de LEDs
- Firmware: protocolo de comunicación con la PC, lógica de encendido progresivo, zona de corte
- Montaje físico del indicador en el cockpit
-->

## Fuente de datos

Placeholder: de dónde vienen los datos de RPM (telemetría del simulador).

## Procesamiento

Placeholder: cómo se traduce el dato de RPM a la secuencia de LEDs.

## Firmware y hardware

Placeholder: microcontrolador, tira de LEDs, protocolo de comunicación.

## Montaje

Placeholder: dónde y cómo se instaló en el cockpit.

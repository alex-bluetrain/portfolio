---
title: "Pedalera casera con electrónica propia"
date: 2021-09-01
category: electronica
status: iterando
summary: "Pedalera de freno/acelerador/embrague fabricada a medida, con sensores, electrónica de lectura y firmware propio."
cover: /images/placeholder.svg
images:
  - src: /images/placeholder.svg
    alt: "Foto pendiente: pedalera completa"
    caption: "Pedalera terminada, vista lateral"
  - src: /images/placeholder.svg
    alt: "Foto pendiente: sensor de freno de carga (load cell)"
    caption: "Detalle del sensor de carga en el pedal de freno"
  - src: /images/placeholder.svg
    alt: "Foto pendiente: placa electrónica de la pedalera"
    caption: "PCB / protoboard con la electrónica de lectura"
videos:
  - title: "Video pendiente: prueba de respuesta de los pedales"
    caption: "Comparación de curvas antes/después de calibrar"
specs:
  - label: "Sensor de freno"
    value: "PENDIENTE (ej: load cell + HX711)"
  - label: "Sensores acelerador/embrague"
    value: "PENDIENTE (ej: potenciómetros / sensores de efecto Hall)"
  - label: "Microcontrolador"
    value: "PENDIENTE (ej: Arduino Leonardo / Pro Micro / ESP32)"
  - label: "Interfaz con PC"
    value: "PENDIENTE (ej: HID joystick nativo)"
tags: ["pedalera", "electronica", "load-cell", "firmware"]
order: 0
---

<!--
TODO:
- Por qué armaste la pedalera propia en vez de comprar una
- Elección de sensores (load cell para freno, potenciómetros/hall para acelerador y embrague)
- Diseño mecánico del pedal (resortes, elastómeros, ángulo, resistencia progresiva)
- Electrónica: esquema, componentes, por qué esa placa
- Firmware: qué hace (lectura de sensores, filtrado de señal, curva de respuesta, salida HID)
- Iteraciones y problemas resueltos (ruido en la señal, deriva del load cell, calibración)
-->

## Por qué una pedalera propia

Placeholder: motivación y limitaciones de las opciones comerciales.

## Diseño mecánico

Placeholder: estructura del pedal, sistema de resistencia (resorte/elastómero), ajustes.

## Electrónica

Placeholder: sensores utilizados, esquema eléctrico, placa de lectura.

## Firmware

Placeholder: lógica del firmware (lectura, filtrado, mapeo de curva, comunicación con la PC).

## Iteraciones

Placeholder: problemas encontrados (ruido, deriva, saturación) y cómo se resolvieron con el tiempo.

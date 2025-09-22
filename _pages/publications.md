---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

You can also find my articles on my [Google Scholar](https://scholar.google.com/citations?user=ZDw8uCkAAAAJ&hl=en&oi=ao) profile
------

## 1. Performance of Large Language Models Across Edge and Cloud Platforms in Smart Spaces

**Authors:** A. Varol, N.H. Motlagh, M. Leino, J. Virkki  
**Conference:** 2025 10th International Conference on Smart and Sustainable Technologies (SpliTech)  
**Year:** 2025  
**Summary:** This paper presents a hybrid edge–cloud framework for deploying large language models (LLMs) in smart spaces, integrating open-source models on edge devices (laptops, Raspberry Pis) with a commercial cloud platform. It evaluates performance in terms of latency and accuracy across descriptive, diagnostic, predictive, and prescriptive analytics using both historical and real-time environmental data. Findings highlight the complementary strengths of cloud-based and edge-based deployments, with a task-aware split improving performance, privacy, and resilience in AI-driven smart environments.  
**Link:** [View Publication](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11091771)

## 2. From Prompts to Motors: Man-in-the-Middle Attacks on LLM-Enabled Vacuum Robots

**Authors:** A. Shaikh, A. Varol, J. Virkki  
**Journal:** IEEE Access
**Year:** 2025  
**Summary:** This paper presents a three-phase testbed and gray-box threat model for man-in-the-middle (MITM) attacks on an LLM-enabled vacuum robot. Presented methodology converts natural-language prompts into motor commands. Study evaluates four attacks—two indirect prompt-injection and two output-manipulation scenarios—across GPT-4, GPT-4o mini, and GPT-3.5 Turbo in simulated, tabletop, and physical trials, showing that a remote adversary who intercepts JSON messages can bypass collision avoidance, override motor control, and deliver deceptive feedback to users.
**Link:** [View Publication](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11091771](https://ieeexplore.ieee.org/abstract/document/11108294))

## 3. Creation of AI-driven Smart Spaces for Enhanced Indoor Environments – A Survey

**Authors:** A. Varol, N.H. Motlagh, M. Leino, S. Tarkoma, J. Virkki  
**Journal:**   
**Year:** 2024  
**Summary:** This survey introduces foundational components required to build AI-driven smart environments, emphasizing the integration of emerging AI methodologies to enhance functionalities such as personalized comfort settings and interactive living spaces. It provides a comprehensive overview of sensor technologies, data communication protocols, and the role of AI in creating intelligent, adaptive indoor environments.  
**Link:** [View Publication](https://arxiv.org/pdf/2412.14708?)

## 4. A single-IC realizable, electronically tunable, OTA-based full-wave rectifier with simultaneous positive and negative outputs

**Authors:** A. Varol, F. Yucel, E. Yuce, A. Cakir  
**Journal:** AEU-International Journal of Electronics and Communications  
**Year:** 2024  
**Summary:** This paper presents a novel operational transconductance amplifier (OTA)-based full-wave rectifier circuit that is electronically tunable and capable of providing simultaneous positive and negative outputs. The design is suitable for integration into a single integrated circuit (IC), offering advantages in analog signal processing applications.  
**Link:** [View Publication](https://www.sciencedirect.com/science/article/abs/pii/S1434841124002590)

## 5. LeNet ve ResNet Derin Öğrenme Modelleri ile Asma Yapraklarının Sınıflandırması

**Authors:** K. Kayaalp, A. Varol  
**Journal:** Veri Bilimi  
**Year:** 2024  
**Summary:** This study explores the classification of grapevine leaves using deep learning models, specifically LeNet and ResNet architectures. The research demonstrates the effectiveness of these models in accurately classifying different types of grapevine leaves, contributing to advancements in agricultural applications of deep learning.  
**Link:** [View Publication](https://dergipark.org.tr/en/download/article-file/3937414)

## 6. A new electronically tunable transimpedance-mode OTA-based first-order universal filter and its quadrature oscillator application

**Authors:** A. Varol, F. Yucel, A. Cakir  
**Journal:** Journal of Circuits, Systems and Computers  
**Year:** 2023  
**Summary:** This paper introduces a novel transimpedance-mode first-order universal filter using operational transconductance amplifiers (OTAs). The proposed circuit is electronically tunable and can function as a quadrature oscillator, offering versatility in analog signal processing applications.  
**Link:** [View Publication](https://www.worldscientific.com/doi/abs/10.1142/S0218126623501840)

## 7. A New Mobile Application for Physical Measurement in a Cellular Network

**Authors:** A. Varol, B.K. Çetin  
**Journal:** Journal of Scientific Reports-A  
**Pages:** 178-200  
**Year:** 2020  
**Summary:** This research presents a mobile application designed for physical measurements within cellular networks. The application aims to provide accurate and efficient measurement capabilities, enhancing the analysis and optimization of cellular network performance.  
**Link:** [View Publication](https://dergipark.org.tr/en/download/article-file/1481124)



<!--
{% include base_path %}

 New style rendering if publication categories are defined 
{% if site.publication_category %}
  {% for category in site.publication_category  %}
    {% assign title_shown = false %}
    {% for post in site.publications reversed %}
      {% if post.category != category[0] %}
        {% continue %}
      {% endif %}
      {% unless title_shown %}
        <h2>{{ category[1].title }}</h2><hr />
        {% assign title_shown = true %}
      {% endunless %}
      {% include archive-single.html %}
    {% endfor %}
  {% endfor %}
{% else %}
  {% for post in site.publications reversed %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}
-->



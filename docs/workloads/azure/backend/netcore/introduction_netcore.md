---
id: introduction_netcore
title: Introduction to the .NET Core REST API application
sidebar_label: Introduction
hide_title: false
hide_table_of_contents: true
description: Introduction to .NET Core REST API application with CQRS
keywords:
  - .net core
  - rest api
  - cqrs
  - showcase
  - azure
  - application insights
  - cosmos db
---

import HideNavigation  from "../../../../../src/pages/HideNavigation";


This is a sample .NET Core REST API application with CQRS, showcasing best coding practices and integrating with Azure
and scaffolding for Amido Stacks.

The application implements Application Insights for performance management,
and Cosmos DB is used for cloud persistence.

The application is designed as a restaurant menu application. Users can create a Menu.
Menus can hold one or more Categories, and a Category holds menu Items.
The API provides an interface for clients to create/update and delete any or all of the menu components.


:::tip Demo
**For a clearer understanding on the output, there is a demo API hosted [here](https://dev-netcore-api.nonprod.amidostacks.com/api/menu/swagger/index.html).**
:::

As an example below is a Json response to illustrate the structure defined by the model.

```json
{
    "id": "296b3d1e-c8f0-4958-8138-bf191f633cbc",
    "restaurantId": "a6f6a3e0-7a4c-4c0a-b7cf-6115b624c2e7",
    "name": "Restaurant Menu",
    "description": "Restaurant Menu Description",
    "categories": [
        {
            "id": "ab6df204-572b-46ef-b5b5-75a6a6b47882",
            "name": "Main Menus",
            "description": "Main meals",
            "items": [
                {
                    "id": "5a63d477-11a6-454b-902e-f3794b723f0e",
                    "name": "Lasagna",
                    "description": "Pasta Item",
                    "price": 13.56,
                    "available": true
                }
            ]
        }
    ],
    "enabled": true
}
```

<HideNavigation prev />


# Yireo ReactExample module
This module offers a React-based component for display in the current Magento 2 frontend. Please note that this is an experiment to show how easy it is to build React components. It could be used on live sites, but comes without warranties.

## Installation
Before you install this module, make sure to install the [`Yireo_React`](https://github.com/yireo-training/Yireo_React) module first. An install via composer should pick this up right away.

Use the following commands to install this module into Magento 2:

    composer config repositories.yireo-react-example vcs git@github.com:yireo-training/Yireo_ReactExample.git
    composer require yireo/magento2-react-example:dev-master

    bin/magento module:enable Yireo_React Yireo_ReactExample
    bin/magento setup:upgrade
    
Make sure to read the **Usage** section below as well.

## Usage
This module adds a `HelloWorld` component to the Magento 2 frontend, based upon ReactJS. This requires the source to be compiled into generic AMD code that works with RequireJS. To compile the source, enter the `view/frontend/` folder from a shell. Next, install all packages listed in `package.json`:

    cd view/frontend
    npm install

After this, you should be able to modify the files `view/frontend/react_source` and compile them to browser code using Gulp:

    gulp build

If you want to develop this code yourself, you can also run:

    gulp watch

## Expected behaviour
The example component simply adds a *Hello World* statement to the Magento `content` container.

## Current issues
Gulp is used instead of Webpack, because you don't need most of the cool stuff that Webpack offers: The webserver is not going be to Node-based, but is the Magento webserver instead. Because of this, hot module reloading can not be used.
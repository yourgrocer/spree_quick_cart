SpreeQuickCart
==============

This gem introduces the add to cart button in the product catalogue, adding product to cart and remaining in the same page.

The cart operation is done via javascript, automatically updating the cart information.

Installation
------------

Add spree_quick_cart to your Gemfile:

```ruby
gem 'spree_quick_cart'
```

Bundle your dependencies and run the installation generator:

```shell
bundle
bundle exec rails g spree_quick_cart:install
```

Testing
-------

Be sure to bundle your dependencies and then create a dummy test app for the specs to run against.

```shell
bundle
bundle exec rake test_app
bundle exec rspec spec
```

When testing your applications integration with this extension you may use it's factories.
Simply add this require statement to your spec_helper:

```ruby
require 'spree_quick_cart/factories'
```

Copyright (c) 2013 [Francisco Trindade], released under the New BSD License

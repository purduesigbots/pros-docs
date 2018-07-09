========
Supplier
========

.. contents:: :local:

okapi::Supplier
===============

A supplier of instances of a concrete type. This class is meant to be used where multiple instances
of a type are needed indiscriminately. Instead of passing those instances manually, pass a
``Supplier`` of that type instead.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        template <typename T> explicit Supplier(std::function<T(void)> ifunc)

   .. tab :: Example
      .. highlight:: cpp
      ::

            okapi::Supplier<std::string> stringSupplier([]() { return "Hello, world!"; });
            std::cout << stringSupplier.get() << std::endl;
            
            okapi::Supplier<int> intSupplier([]() { return 42; });
            std::cout << intSupplier.get() << std::endl;


Methods
-------

get
~~~

Get an instance of type ``T``. This is usually a new instance, but it does not have to be.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        T get() const

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          okapi::Rate rate;
          while (true) {
            // Do something 10 times per second
            rate.delay(10_Hz);
          }
        }

**Returns:** An instance of type ``T``.
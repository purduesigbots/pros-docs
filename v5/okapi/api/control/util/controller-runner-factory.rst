=========================
Controller Runner Factory
=========================

.. contents:: :local:

okapi::ControllerRunnerFactory
==============================

A `factory <https://sourcemaking.com/design_patterns/factory_method>`_ which creates instances of
`ControllerRunner <controller-runner.html>`_. This is the preferred way of creating a
`ControllerRunner <controller-runner.html>`_.

You can read more about the factory pattern
`here <https://sourcemaking.com/design_patterns/factory_method>`_.

create
~~~~~~

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        template <typename Input, typename Output>
        static ControllerRunner<Input, Output> create()

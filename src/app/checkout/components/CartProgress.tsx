interface CartProgressProps {
  currentStep: 'cart' | 'delivery' | 'payment'
}

export default function CartProgress({ currentStep }: CartProgressProps) {
  const steps = [
    { id: 'cart', name: 'Carrito', href: '/checkout/carrito' },
    { id: 'delivery', name: 'Entrega', href: '/checkout/entrega' },
    { id: 'payment', name: 'Pago', href: '/checkout/pago' }
  ]

  return (
    <div className="relative mt-12 sm:mt-16">
      <div className="flex justify-center items-center">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            {index > 0 && (
              <div className="flex items-center">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 w-1 rounded-full mx-0.5 ${
                      steps.findIndex(s => s.id === currentStep) >= index
                        ? 'bg-primary'
                        : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            )}
            <div className="relative flex flex-col items-center">
              <div 
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  currentStep === step.id
                    ? 'border-primary bg-primary'
                    : steps.findIndex(s => s.id === currentStep) > steps.findIndex(s => s.id === step.id)
                    ? 'border-primary bg-primary'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {currentStep === step.id && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <span 
                className={`absolute -bottom-6 text-xs whitespace-nowrap ${
                  currentStep === step.id
                    ? 'text-primary font-medium'
                    : 'text-gray-500'
                }`}
              >
                {step.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


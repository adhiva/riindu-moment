interface AccessDeniedProps {
  message: string
}

export default function AccessDenied({ message }: AccessDeniedProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-effect rounded-3xl p-12 max-w-md text-center animate-fade-in shadow-2xl">
        <div className="text-6xl mb-6 animate-float">🎁</div>
        <h1 className="text-2xl font-semibold text-pink-pastel-700 mb-4">
          Almost There...
        </h1>
        <p className="text-pink-pastel-600 text-lg leading-relaxed">
          {message}
        </p>
      </div>
    </div>
  )
}

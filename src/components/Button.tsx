type ButtonProps = {
  onClick: () => void
  type: 'add' | 'delete'
}

function Button({ onClick, type }: ButtonProps) {
  const isAdd = type === 'add'
  const buttonClasses = `
  inline-block rounded border px-12 py-3 text-sm font-medium focus:outline-none focus:ring
  ${
    isAdd
      ? 'text-blue-500 hover:text-blue-700 border-blue-500 hover:border-blue-700'
      : 'text-red-500 hover:text-red-700 border-red-500 hover:border-red-700'
  }
`

  return (
    <button onClick={onClick} className={buttonClasses}>
      {isAdd ? 'Add' : 'Delete'}
    </button>
  )
}

export default Button

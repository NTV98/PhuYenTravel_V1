import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
        Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700">Họ tên</label>
        <input
          required
          name="name"
          value={form.name}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg bg-slate-50 px-4 py-3 border border-transparent focus:border-transparent focus:ring-0 focus:outline-none placeholder-slate-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Email</label>
        <input
          type="email"
          required
          name="email"
          value={form.email}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg bg-slate-50 px-4 py-3 border border-transparent focus:border-transparent focus:ring-0 focus:outline-none placeholder-slate-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Nội dung</label>
        <textarea
          required
          rows="5"
          name="message"
          value={form.message}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg bg-slate-50 px-4 py-3 border border-transparent focus:border-transparent focus:ring-0 focus:outline-none placeholder-slate-400"
        ></textarea>
      </div>
      <button className="btn-primary" type="submit">Gửi liên hệ</button>
    </form>
  )
}



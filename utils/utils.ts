export function getCookie(name: string) {
  // 获取所有 cookie
  const cookies = document.cookie.split('; ')

  // 查找特定 cookie
  for (const cookie of cookies) {
    const [key, value] = cookie.split('=')
    if (key === name)
      return decodeURIComponent(value) // 返回解码后的值
  }

  return null // 如果未找到，返回 null
}

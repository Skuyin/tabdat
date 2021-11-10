export default function ScrollToTop() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <p onClick={scrollToTop}>Scroll to top</p>
  )
}

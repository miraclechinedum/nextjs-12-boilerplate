export default [
  { label: "EXPLORER", href: "/explorer" },
  { label: "MARKET", href: "/market" },
  { label: "TRADING", href: "/blog" },
  { label: "NFT CREATOR", href: "/contact" }
].map(link => {
  link.style = `nav-link`;
  return link;
});

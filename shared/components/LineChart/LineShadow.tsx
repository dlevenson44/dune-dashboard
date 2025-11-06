const LineShadow = () => (
  <defs>
    {/* SVG filter to add a yellow shadow to the line chart:
        1. feGaussianBlur: Creates a blur effect from the line's alpha channel
        2. feOffset: Shifts the blurred shadow down by 2px
        3. feFlood: Fills the shadow with yellow color (#FDE047) at 80% opacity
        4. feComposite: Combines the flood color with the offset blur
        5. feMerge: Layers the shadow behind the original line graphic */}
    <filter id="yellowShadow" height="150%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
      <feOffset dx="0" dy="2" result="offsetblur"/>
      <feFlood floodColor="#FDE047" floodOpacity="0.8"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
);

export default LineShadow

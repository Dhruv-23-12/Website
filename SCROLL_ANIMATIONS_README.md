# Scroll Animation System

This project now includes a comprehensive scroll animation system that enhances user experience with smooth, performant animations triggered by scroll events.

## Features

### 🎯 Core Components

1. **ScrollAnimation** - Main wrapper component for scroll-triggered animations
2. **AnimatedText** - Word-by-word text animation with typewriter effect
3. **ScrollProgressBar** - Real-time scroll progress indicator
4. **ScrollAnimationStyles** - Global CSS styles for all animations

### 🎨 Animation Types

- **fadeIn** - Simple fade in effect
- **fadeInUp** - Fade in from bottom
- **fadeInDown** - Fade in from top
- **fadeInLeft** - Fade in from left
- **fadeInRight** - Fade in from right
- **scaleIn** - Scale up from smaller size
- **slideInUp** - Slide up from greater distance
- **slideInDown** - Slide down from greater distance

### ⚡ Performance Features

- Uses Intersection Observer API for optimal performance
- CSS-based animations for smooth 60fps performance
- Reduced motion support for accessibility
- Responsive design with mobile optimizations
- Memory efficient with proper cleanup

## Usage

### Basic ScrollAnimation

```tsx
import { ScrollAnimation } from './ScrollAnimations';

<ScrollAnimation animation="fadeInUp" delay={0.2}>
  <div className="your-content">
    This will animate when scrolled into view
  </div>
</ScrollAnimation>
```

### AnimatedText Component

```tsx
import { AnimatedText } from './ScrollAnimations';

<AnimatedText 
  className="text-lg text-gray-300"
  delay={0.4}
  stagger={0.05}
>
  Each word in this sentence will animate individually with a slight delay.
</AnimatedText>
```

### ScrollProgressBar

```tsx
import { ScrollProgressBar } from './ScrollAnimations';

// Add to your main App component
<ScrollProgressBar />
```

### Staggered Animations

```tsx
{items.map((item, index) => (
  <ScrollAnimation 
    key={item.id} 
    animation="fadeInUp" 
    delay={0.2 + index * 0.1}
  >
    <div className="card">
      {item.content}
    </div>
  </ScrollAnimation>
))}
```

## Props

### ScrollAnimation Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | string | 'fadeInUp' | Animation type to use |
| `delay` | number | 0 | Delay before animation starts (seconds) |
| `threshold` | number | 0.1 | Intersection threshold (0-1) |
| `triggerOnce` | boolean | true | Whether to animate only once |
| `className` | string | '' | Additional CSS classes |

### AnimatedText Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | string | - | Text to animate |
| `delay` | number | 0 | Initial delay before animation |
| `stagger` | number | 0.1 | Delay between each word (seconds) |
| `className` | string | '' | Additional CSS classes |

## Implementation Examples

### Hero Section
```tsx
<ScrollAnimation animation="fadeInUp" delay={0.2}>
  <h1>Welcome to Our Platform</h1>
</ScrollAnimation>

<ScrollAnimation animation="fadeInUp" delay={0.4}>
  <AnimatedText delay={0.6} stagger={0.05}>
    Experience the future of cybersecurity with our innovative solutions.
  </AnimatedText>
</ScrollAnimation>
```

### Service Cards
```tsx
<div className="grid grid-cols-3 gap-6">
  {services.map((service, index) => (
    <ScrollAnimation 
      key={service.id}
      animation="fadeInUp" 
      delay={0.2 + index * 0.1}
    >
      <div className="service-card">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </ScrollAnimation>
  ))}
</div>
```

### Side-by-Side Content
```tsx
<div className="grid md:grid-cols-2 gap-8">
  <ScrollAnimation animation="fadeInLeft" delay={0.3}>
    <div className="content-left">
      <img src="/image.jpg" alt="Content" />
    </div>
  </ScrollAnimation>
  
  <ScrollAnimation animation="fadeInRight" delay={0.5}>
    <div className="content-right">
      <h2>Title</h2>
      <AnimatedText delay={0.7} stagger={0.05}>
        Detailed description of the content.
      </AnimatedText>
    </div>
  </ScrollAnimation>
</div>
```

## Customization

### Adding New Animation Types

1. Add the animation variant to the `animations` object in `ScrollAnimations.tsx`:

```tsx
const animations = {
  // ... existing animations
  customAnimation: {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0 }
  }
};
```

2. Add the corresponding CSS in `ScrollAnimationStyles`:

```css
.scroll-animation-customAnimation {
  opacity: 0;
  transform: rotate(-10deg);
}

.scroll-animation-customAnimation.scroll-animation-visible {
  opacity: 1;
  transform: rotate(0deg);
}
```

### Custom Timing Functions

Modify the transition timing in the `ScrollAnimation` component:

```tsx
transition={{
  duration: 0.8,
  delay,
  ease: [0.25, 0.46, 0.45, 0.94] // Custom cubic-bezier
}}
```

## Accessibility

The animation system includes several accessibility features:

- **Reduced Motion Support**: Animations are disabled for users who prefer reduced motion
- **Keyboard Navigation**: All animated elements remain keyboard accessible
- **Screen Reader Friendly**: Content is available to screen readers even during animations
- **Focus Management**: Focus indicators work correctly with animated elements

## Browser Support

- **Modern Browsers**: Full support with Intersection Observer API
- **Older Browsers**: Graceful fallback with opacity animations
- **Mobile**: Optimized performance with reduced animation distances

## Performance Tips

1. **Use `triggerOnce={true}`** for elements that don't need to re-animate
2. **Limit concurrent animations** by using appropriate delays
3. **Use CSS transforms** instead of layout-changing properties
4. **Test on mobile devices** to ensure smooth performance

## Demo

Visit `/scroll-demo` to see all animation types in action and test the system.

## Troubleshooting

### Animations Not Triggering
- Check that the element is visible in the viewport
- Verify the `threshold` value is appropriate
- Ensure the parent container has sufficient height

### Performance Issues
- Reduce the number of concurrent animations
- Increase delays between staggered animations
- Use `transform` and `opacity` properties only

### Mobile Issues
- Test on actual mobile devices
- Consider reducing animation distances on small screens
- Use the responsive CSS classes provided

## Future Enhancements

- [ ] Parallax scrolling effects
- [ ] Scroll-triggered video animations
- [ ] Advanced easing functions
- [ ] Animation presets for common patterns
- [ ] Performance monitoring and optimization

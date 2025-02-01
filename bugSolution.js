```javascript
// pages/index.js
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./my-dynamic-component'), {
  ssr: false, // This is the key change to resolve the issue
});

export default function Home() {
  return (
    <div>
      <h1>Hello from Home</h1>
      <DynamicComponent />
    </div>
  );
}
```
```javascript
//pages/my-dynamic-component.js

export default function MyDynamicComponent(){
    return(
        <div>Dynamic Component</div>
    );
}
```
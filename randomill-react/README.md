# Randomill for React
A simple implementation of randomill-ts for React.

Components:

RandomillString accepts a type (required) (StringType from randomill-ts) and a gibberishLength if you are using a gibberishMode.
```tsx
    <RandomillString type={StringType.Gibberish} gibberishLength={15} />
```

RandomillNumber accepts a min and max (optional).
```tsx
    <RandomillNumber min={0} max={1} />
```
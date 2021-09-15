# Callback

> Callbacks basically are functions that receive another function as parameter.

```javascript
  const result = (res) => {
    console.log(res);
  }

  const sum = (n1, n2, callback) => {
    const sum = n1 + n2;
    callback(sum);
  }

  sum(2,3,result);
```
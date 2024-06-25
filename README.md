# Alya Forms

Have you ever needed to show something to the user and send something else to the server?
<br>
Or have a input display a certain kind of data, but work with a different object internally?
<br>
**Alya Forms helps you achieve that!**

### How does it work

In Alya Forms your input data is stored in an ```Attribute```. The attribute consists of an object with two properties, ```display``` and ```value```, as presented below:

```javascript
{ display: 'Carlos Eduardo', value: '507f1f77bcf86cd799439011' } 
```

The ```display``` property is the one that the user sees and the ```value``` is the one that only you will see and work with.

> [!TIP]
> Let's say that were coding a input that searchs for a person in the database as the user types on it. The data of this input can be represented as the example above. The user will see the name of the person in the input, but the application will have his id internally to send to the backend when needed.


### How can I implement it

The library provides you two exports:

  - The **```useForm```** hook, recommended for creating custom forms that take advantage of the library full resources. Like reacting to ```data``` changes and updating values programatically with ```update```.

  ```javascript
  const { data, connect, update, reset } = useForm({ initialData: initialData })
  ```

  - The **```Form```** component, recommended for simpler forms when you just need to submit the data.

  ```typescript
      <Form onSubmit={handleSubmit}
        render={(form: AlyaForm) => (
          <>
            <YourInput {...form.connect('firstName')} type="text" placeholder="First name"/>
            <button type="submit">Submit</button>
          </>
        )}
      />
  ```

To use both you'll need to implement the ```connect``` api into your inputs first:

### Connecting an input

To connect an input to your form the library provides you with the method ```connect```:

```javascript
<YourInput {...connect('firstName')} type="text" placeholder="First name"/>
```

This method exposes the properties ```name``` and ```attribute```, the hook ```useAttribute``` and the function ```setAttribute```.

- ```name``` it's the name of the attribute in the ```data``` object (represented by *firstName* in the example above).
- ```attribute``` it's the value of the attribute in the ```data``` object.
- ```useAttribute``` it's a hook to initialize the attribute in the ```data``` object.
- ```setAttribute``` it's a function to set the value of the attribute in the ```data``` object.



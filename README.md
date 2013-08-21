## Insert elements into target by passing an object of nodes

This example:
```javascript
$(function () {
    var nodes = [
        {
            element: 'form', 
            html: [
                {
                    element: 'input',
                    attr: {
                        type: 'text',
                        name: 'foo',
                        id: 'foo',
                        placeholder: 'foo',
                        val: 'value'
                    }
                },
                {
                    element: 'button',
                    type: 'submit',
                    attr: {
                        text: 'Call Alert',
                        click: function () {
                            alert('alert');
                        }
                    },
                },
            ]
        }
    ];
    
    $('body').insertNodes(nodes);
});
```

Insert this HTML into body tag:
```html
    <form><input type="text" name="foo" id="foo" placeholder="foo"><button type="submit">Call Alert</button></form>
```

## Useful for?!
Don't know =) You tell me. Fork it if you have any improvement idea.
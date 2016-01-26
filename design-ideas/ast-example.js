MCDOMNode({
  type: 'tag',
  value: 'html',
  children: [
    MCBlockNode({
      value: MCCompileExpression({value: '@each({collection: ctx.children, item: "item", key: "i"})'}),
      children: [
        MCDOMNode({
          type: 'tag',
          value: 'label'
        }),
        MCDOMNode({
          type: 'input',
          attribs: [
            {
              type: 'text',
              value: MCRenderExpression({value: 'item.value'})
            }
          ],
          mcAttribs: [
            MCAttribExpression({
              type: 'on'
              args:['input'],
              value: '$update(item.value)'
            })
          ]
        })
      ]
    })
  ]
})

// MCNode
  // MCDOMNode
  // MCBlockNode
// MCExpression
  // MCCompileExpression
  // MCRenderExpression
  // MCAttribExpression

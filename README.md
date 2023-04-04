helios-template-azure-node-function

# Function setup
Create a new function, in this example it's a HTTP trigger called "HttpExample

```console
func new --name HttpExample --template "HTTP trigger" --authlevel anonymous

# maybe

func new --name HttpExample --template "HTTP trigger" --authlevel anonymous --language typescript --worker-runtime node


func new --name TimerExample --template "Timer trigger" --language typescript --worker-runtime node

```

```console
npm install

npm start
```
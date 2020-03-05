import Vue from 'vue'

// 最终根据项目需要进行适当增删
import {
  Pagination,
  Dialog,
  Autocomplete,
  Drawer,
  Divider,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Link,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  // Carousel,
  // CarouselItem,
  // Collapse,
  // CollapseItem,
  ColorPicker,
  // Transfer,
  Cascader,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui'

Vue.prototype.$ELEMENT = { size: 'medium' }
Vue
  .use(Pagination)
  .use(Drawer)
  .use(Divider)
  .use(Dialog)
  .use(Autocomplete)
  .use(Dropdown)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Menu)
  .use(Submenu)
  .use(MenuItem)
  .use(MenuItemGroup)
  .use(Input)
  .use(InputNumber)
  .use(Radio)
  .use(RadioGroup)
  .use(RadioButton)
  .use(Checkbox)
  .use(CheckboxButton)
  .use(CheckboxGroup)
  .use(Switch)
  .use(Select)
  .use(Option)
  .use(OptionGroup)
  .use(Button)
  .use(ButtonGroup)
  .use(Table)
  .use(TableColumn)
  .use(DatePicker)
  .use(TimeSelect)
  .use(TimePicker)
  .use(Popover)
  .use(Tooltip)
  .use(Breadcrumb)
  .use(BreadcrumbItem)
  .use(Form)
  .use(FormItem)
  .use(Tabs)
  .use(TabPane)
  .use(Tag)
  .use(Link)
  .use(Tree)
  .use(Alert)
  .use(Slider)
  .use(Icon)
  .use(Row)
  .use(Col)
  .use(Upload)
  .use(Progress)
  .use(Badge)
  .use(Card)
  .use(Rate)
  .use(Steps)
  .use(Step)
  // .use(Carousel)
  // .use(CarouselItem)
  // .use(Collapse)
  // .use(CollapseItem)
  .use(ColorPicker)
  // .use(Transfer)
  .use(Cascader)
  .use(Container)
  .use(Header)
  .use(Aside)
  .use(Main)
  .use(Footer)
  .use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

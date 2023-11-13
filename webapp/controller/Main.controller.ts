import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import Table from "sap/ui/table/Table";
/**
 * @namespace cap.app.controller
 */
export default class Main extends BaseController {
	public sayHello(): void {
		MessageBox.show("Hello World!");
	}
}

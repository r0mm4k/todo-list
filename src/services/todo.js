import * as axios from 'axios';

export default class TodoService {
	constructor() {
		this._initialAPI = axios.create({
			baseURL: `https://todo-api-r0mm4k.herokuapp.com/api`
		});
	}

	getResource = async (endpoint) => {
		const res = await this._initialAPI.get(endpoint);
		return res.data;
	};

	postResource = async (endpoint, title) => {
		const res = await this._initialAPI.post(endpoint, {title, important: false, done: false});
		return res.data;
	};

	deleteResource = async (endpoint) => {
		const res = await this._initialAPI.delete(endpoint);
		return res.data._id;
	};

	putResource = async (endpoint, key, value) => {
		const res = await this._initialAPI.put(endpoint, {[key]: value});
		return res.data._id;
	};

	getAllTask = async () => {
		const res = await this.getResource(`/todos`);
		return res.map((task) => this._transformTask(task));
	};

	getTask = async (id) => {
		const task = await this.getResource(`/todos/${id}`);
		return this._transformTask(task);
	};

	addTask = async (title) => {
		const task = await this.postResource(`/todos`, title);
		return this._transformTask(task);
	};

	deleteTask = async (id) => {
		return await this.deleteResource(`/todos/${id}`);
	};

	doneTask = async (id, done) => {
		return await this.putResource(`/todos/${id}`, 'done', done);
	};

	importantTask = async (id, important) => {
		return await this.putResource(`/todos/${id}`, 'important', important);
	};

	editTask = async (id, title) => {
		return await this.putResource(`/todos/${id}`, 'title', title);
	};

	_transformTask = (task) => {
		return {
			id: task._id,
			title: task.title,
			important: task.important,
			done: task.done
		};
	};
}
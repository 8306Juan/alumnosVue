<template>
	<div>
		<!-- AGREGAR  AGREGAR  AGREGAR  AGREGAR  AGREGAR  AGREGAR -->

		<div class="text-center grid grid-cols-3 gap-4 w-1/2 bg-gray-200 m-auto p-4">
	      <h1 class="text-3xl col-span-3"> Nuevo Alumno</h1>
	      <label>Nombre: </label><input v-model="nombre" class="col-span-2" type="text">
	      <label>Apellido: </label><input v-model="apellido" class="col-span-2" type="text">
	      <label>Direccion: </label><input v-model="direccion" class="col-span-2" type="text">
	      <label>Email: </label><input v-model="email" class="col-span-2" type="email">
	      <button @click="agregar" class="col-start-2 bg-green-400 rounded-xl">Agregar Alumno</button>
 		</div>

 		<!-- LISTA  LISTA  LISTA  LISTA  LISTA  LISTA  LISTA -->

		<h1 class="m-auto w-1/2 text-center text-3xl mb-8 mt-10">Lista de Alumnos</h1>
		<ul class="m-auto w-1/2 text-center">
			<div class="flex justify-between mt-4 bg-gray-200" v-for="(alumno, idx) of arrayAlumnos">
				<div class="m-3">{{arrayAlumnos[idx].nombre}}</div>
				<div class="m-3">{{arrayAlumnos[idx].apellido}}</div>
				<div class="m-3">{{arrayAlumnos[idx].direccion}}</div>
				<div class="m-3">{{arrayAlumnos[idx].email}}</div>
				<button @click="editorA(idx)" class="bg-green-500 rounded-2xl p-2 m-2">Editar</button>
				<button @click="borrar(idx)" class="bg-red-500 rounded-2xl p-2 m-2">Borrar</button>
			</div>
		</ul>
		<!-- EDITOR  EDITOR  EDITOR  EDITOR  EDITOR  EDITOR -->

		<div class="editarA text-center grid grid-cols-3 gap-4 w-1/2 bg-blue-400 top-0 left-1/4 p-4 absolute hidden">
			<h1 class="text-3xl col-span-3"> Editar Alumno</h1>
	    	<label>Nombre: </label><input v-model="editnombre" class="col-span-2" type="text">
	    	<label>Apellido: </label><input v-model="editapellido" class="col-span-2" type="text">
	    	<label>Direccion: </label><input v-model="editdireccion" class="col-span-2" type="text">
	    	<label>Email: </label><input v-model="editemail" class="col-span-2" type="text">
	    	<button @click="editarAlumno" class="col-start-2 bg-green-400 rounded-xl text-xl">Editar Alumno</button>
		</div>
	</div>
</template>

<script>

	export default{
		name: 'Alumnos',
		data(){
			return{
				nombre:'',
			  	apellido:'',
			  	direccion:'',
			  	email:'',
				arrayAlumnos: [],

				editnombre:'',
			  	editapellido:'',
			  	editdireccion:'',
			  	editemail:'',
			  	editidx: 0
			}
		},
		methods:{
			agregar(){
				if(localStorage.getItem('listaAlumnos') == null){
					localStorage.setItem('listaAlumnos',this.arrayAlumnos)
				}
				this.arrayAlumnos.push({nombre:this.nombre, apellido:this.apellido, direccion:this.direccion,email:this.email});
				localStorage.setItem('listaAlumnos',JSON.stringify(this.arrayAlumnos));
				this.nombre = "";
				this.apellido = "";
				this.direccion = "";
				this.email = "";

			},
			borrar(idx){
				this.arrayAlumnos.splice(idx,1);
				localStorage.setItem('listaAlumnos',JSON.stringify(this.arrayAlumnos));
			},
			editorA(idx){
				let editor = document.querySelector('.editarA');
				editor.classList.toggle('hidden');
				this.editnombre = this.arrayAlumnos[idx].nombre;
				this.editapellido = this.arrayAlumnos[idx].apellido;
				this.editdireccion = this.arrayAlumnos[idx].direccion;
				this.editemail = this.arrayAlumnos[idx].email;
				this.editidx = idx;
			},
			editarAlumno(){
				this.arrayAlumnos[this.editidx].nombre = this.editnombre;
				this.arrayAlumnos[this.editidx].apellido = this.editapellido;
				this.arrayAlumnos[this.editidx].direccion = this.editdireccion;
				this.arrayAlumnos[this.editidx].email = this.editemail;
				localStorage.setItem('listaAlumnos',JSON.stringify(this.arrayAlumnos));
				let editor = document.querySelector('.editarA');
				editor.classList.toggle('hidden');				
			}
		},
		created(){
			let DBVue = JSON.parse(localStorage.getItem('listaAlumnos'));
			if (DBVue == null){
					this.arrayAlumnos = [];
				}else{
					this.arrayAlumnos = DBVue;
			}
		}		
	}
</script>
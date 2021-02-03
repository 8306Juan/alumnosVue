<template>
	<div>
		<!-- AGREGAR  AGREGAR  AGREGAR  AGREGAR  AGREGAR  AGREGAR -->

		<div class="xl:text-center xl:grid xl:grid-cols-3 xl:gap-4 xl:w-1/2 xl:bg-gray-200 xl:m-auto xl:p-4 text-center grid grid-cols-3 gap-4 w-full bg-gray-200 m-auto p-4">
	      <h1 class="xl:text-3xl xl:col-span-3 col-span-3"> Nuevo Alumno</h1>
	      <label>Nombre: </label><input v-model="nombre" class="xl:col-span-2 col-span-2" type="text">
	      <label>Apellido: </label><input v-model="apellido" class="xl:col-span-2 col-span-2" type="text">
	      <label>Direccion: </label><input v-model="direccion" class="xl:col-span-2 col-span-2" type="text">
	      <label>Email: </label><input v-model="email" class="xl:col-span-2 col-span-2" type="email">
	      <button @click="agregar" class="xl:col-start-2 xl:bg-green-400 xl:rounded-xl col-start-2 bg-green-400 rounded-xl">Agregar Alumno</button>
 		</div>

 		<!-- LISTA  LISTA  LISTA  LISTA  LISTA  LISTA  LISTA -->

		<h1 class="xl:m-auto xl:w-8/12 xl:text-center xl:text-3xl xl:mb-8 xl:mt-10 m-auto w-full text-center text-3xl mb-8 mt-10"">Lista de Alumnos</h1>
		<ul class="xl:m-auto xl:w-8/12 xl:text-center m-auto w-full text-center">
			<div class="xl:grid xl:grid-cols-6 xl:mt-4 xl:bg-gray-200 grid grid-cols-4 mt-4 bg-gray-200">
				<div class="m-1 text-xs bg-gray-400 p-1 text-base xl:m-3">Nombre</div>
				<div class="m-1 text-xs bg-gray-400 p-1 text-base xl:m-3">Apellido</div>
				<div class="m-1 text-xs bg-gray-400 p-1 text-base xl:m-3">Direccion</div>
				<div class="m-1 text-xs bg-gray-400 p-1 text-base xl:m-3">Email</div>
			</div>
			<div class="xl:grid xl:grid-cols-6 xl:mt-4 xl:bg-gray-200 grid grid-cols-4 mt-4 bg-gray-200" v-for="(alumno, idx) of arrayAlumnos" :key='alumno.id'>
				<div class="m-1 text-sm xl:m-3">{{alumno.nombre}}</div>
				<div class="m-1 text-sm xl:m-3">{{alumno.apellido}}</div>
				<div class="m-1 text-sm xl:m-3">{{alumno.direccion}}</div>
				<div class="m-1 text-sm xl:m-3">{{alumno.email}}</div>
				<button @click="editorA(idx)" class="xl:bg-green-500 xl:rounded-2xl xl:p-2 xl:m-4 xl:col-start-5 bg-green-500 rounded-2xl p-2 m-2 col-start-2">Editar</button>
				<button @click="borrar(idx)" class="xl:bg-red-500 xl:rounded-2xl xl:p-2 xl:m-4 bg-red-500 rounded-2xl p-2 m-2 col-start-3">Borrar</button>
			</div>
		</ul>
		<!-- EDITOR  EDITOR  EDITOR  EDITOR  EDITOR  EDITOR -->

		<div class="editarA xl:text-center xl:grid xl:grid-cols-3 xl:gap-4 xl:w-1/2 xl:bg-blue-400 xl:top-0 xl:left-1/4 xl:p-4 xl:absolute xl:hidden text-center grid grid-cols-3 gap-4 w-full bg-blue-400 top-0 left-0 p-4 absolute hidden">
			<h1 class="xl:text-3xl xl:col-span-3 text-3xl col-span-3">Editar Alumno</h1>
	    	<label>Nombre: </label><input v-model="editnombre" class="xl:col-span-2 col-span-2" type="text">
	    	<label>Apellido: </label><input v-model="editapellido" class="xl:col-span-2 col-span-2" type="text">
	    	<label>Direccion: </label><input v-model="editdireccion" class="xl:col-span-2 col-span-2" type="text">
	    	<label>Email: </label><input v-model="editemail" class="xl:col-span-2 col-span-2" type="text">
	    	<button @click="editarAlumno" class="xl:col-start-2 xl:bg-green-400 xl:rounded-xl xl:text-xl col-start-2 bg-green-400 rounded-xl text-xl">Editar Alumno</button>
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
				editor.classList.toggle('xl:hidden');
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
				editor.classList.toggle('xl:hidden');
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
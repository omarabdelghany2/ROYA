import { notFound } from "next/navigation";
import { Server, BACKEND_URL } from "./server"

interface Categories {
    categories: {
      id: number;
      name: string;
      description: string;
      content: string;
      image: string;
    }[]
}

export const getCategories = async () => {
    const response = await fetch(`${BACKEND_URL}/categories`)
    let category: Categories = await response.json()
    if (!category) notFound()
    return category.categories
}

//------------------------------------------------------------------------


interface Contact {
    contact: {
      mobile_number: string;
      instagram_account: string;
      facebook_account: string;
      linkedin_account: string;
    }[]
}


export const getContact = async () => {
    const response = await fetch(`${BACKEND_URL}/contact`)
    let contact: Contact = await response.json()
    if (!contact) notFound()
    return contact.contact
}

//------------------------------------------------------------------------

interface Projects {
    projects: {
      name: string;
      description: string;
      image: string;
      category_name: string;
    }[]
}


export const getProjects = async (projectName: string) => {
    const response = await fetch(`${BACKEND_URL}/projects/${projectName}`)
    let projects: Projects = await response.json()
    if (!projects) notFound()
    return projects.projects
}


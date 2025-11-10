import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { UploadForm } from './components/upload-form/upload-form';
import { ReviewForm } from './components/review-form/review-form';


export const routes: Routes = [
    
    {path: 'main', component: Main},
    {path: 'upload', component: UploadForm},
    {path: 'review', component: ReviewForm},
    
];

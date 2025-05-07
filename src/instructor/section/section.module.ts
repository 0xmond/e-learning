import { Module } from "@nestjs/common";
import { SectionController } from "./section.controller";
import { sectionService } from "./section.service";
import { SectionRepo } from "src/db/section/section.repo";
import { Section, sectionSchema } from "src/db/section/section.model";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Section.name, schema: sectionSchema }]), 
      ],
    providers:[ SectionRepo, sectionService],
    controllers:[SectionController]
})
export class sectionModule {} 
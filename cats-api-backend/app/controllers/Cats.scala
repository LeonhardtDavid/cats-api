package controllers

import javax.inject._
import play.api.libs.json.Json
import play.api.mvc._
import services.CatService

import scala.concurrent.ExecutionContext

@Singleton
class Cats @Inject()(cc: ControllerComponents,
                            catService: CatService)(implicit ec: ExecutionContext) extends AbstractController(cc) {

  def cats(category: Option[String]): Action[AnyContent] = Action.async {
    this.catService.listCats(category).map(list => Ok(Json.obj("data" -> list)))
  }

}

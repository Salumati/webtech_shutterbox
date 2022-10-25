package controllers

import javax.inject._
import play.api._
import play.api.mvc._

import views._

import controller.Controller
import aview.Tui

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  /**
   * Create an Action to render an HTML page.
   *
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */

  var cont = Controller.apply()
  val tui = new Tui(cont)
  var isShut: List[Boolean] = List(false, false, false, false, false, false, false, false, false)
  def update() = {
    for ( x <- 1 to 9){
      isShut = isShut.updated(x - 1, cont.isShut(x))
    }
  }

  def index() = Action{ implicit request: Request[AnyContent] =>
    Ok(views.html.index())
  }
  def explain() = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.explain())
  }
  def startGame() = Action{ implicit request: Request[AnyContent] =>
    update()
    Ok(views.html.game(player = cont.getPlayers, dice = cont.getDice, sum = cont.getSum, board = isShut))
  }
  def doAMove(input:String) = Action{ implicit request: Request[AnyContent] =>
    tui.getInputAndPrintLoop(input)
    update()
    Ok(views.html.game(player = cont.getPlayers, dice = cont.getDice, sum = cont.getSum, board = isShut))
  }

}
